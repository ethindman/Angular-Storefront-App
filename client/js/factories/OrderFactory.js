app.factory('OrderFactory', function($http) {
	
	var orders = [];
	var factory = {};

	// show all orders
	factory.getOrders = function(callback) {
		$http.get('/orders').success(function(output) {
			orders = output;
			callback(orders);
		})
	};

	// add new order
	factory.addOrder = function(data, getOrders) {
		$http.post('/orders/add', data).success(function(data) {
			orders.push(data);
			getOrders(orders);
		});
	};

	return factory;
	
});