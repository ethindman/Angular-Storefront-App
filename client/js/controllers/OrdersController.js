app.controller('OrdersController', function($scope, OrderFactory, CustomerFactory) {

	// get orders
	OrderFactory.getOrders(function(data) {
		$scope.orders = data;
	})

	// get customers
	CustomerFactory.getCustomers(function(data) {
		$scope.customers = data;
	})

	// add order
	$scope.addOrder = function() {
		OrderFactory.addOrder($scope.newOrder, function() {
			OrderFactory.getOrders(function(data) {
				$scope.orders = data;
			});
				$scope.newOrder = {};
		});
	};

});