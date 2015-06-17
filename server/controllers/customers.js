var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function (){
	return {
	
	// show all customers from db
	show: function(request, response) {
		Customer.find({}, function(error, data) {
			if(error) {
				console.log(error);
			}
			else {
				response.json(data);
			}
		});
	},

	// add customer
	add: function(request, response) {
		var now = new Date();
		var customer = new Customer({
			name: request.body.name, created_at: now
		});

		customer.save(function(error) {
			if(error) {
				console.log(error);
			}
			else {
				console.log("New customer added!");
				response.json(customer);
			}
		});
	},

	// destroy customer
	delete: function(request, response) {
		Customer.remove({_id: request.body._id}, function(error, data) {
			if(error) {
				console.log(error);
			}
			else {
				console.log("Customer deleted!");
				response.json(request.body);
			}
		});
	}

	};
})();