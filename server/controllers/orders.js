var mongoose = require('mongoose');
// var should be singular and capitalized
var Order = mongoose.model('Order');

module.exports = (function (){
	return {
	
		// get all orders from db
		show: function(request, response) {
			Order.find({}, function(error, data) {
				if(error) {
					console.log(error);
				}
				else {
					response.json(data);
				}
			});
		},

		// add new order
		add: function(request, response) {
			var now = new Date();
			var order = new Order({
				name: request.body.name, quantity: request.body.quantity, product: request.body.product, created_at: now
			});

			order.save(function(error) {
				if(error) {
					console.log(error);
				}
				else {
					console.log("New order added!");
					response.json(order);
				}
			});
		}

	};
})();