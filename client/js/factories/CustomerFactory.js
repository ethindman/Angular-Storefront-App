app.factory('CustomerFactory', function($http) {
	
	var customers = [];
	var factory = {};

	// get customers
	factory.getCustomers = function(getAll) {
		$http.get('/customers').success(function(output) {
			customers = output;
			getAll(customers);
		})
	};

	// add new customer
	factory.addCustomer = function(data, getTasks) {
		$http.post('/customers/add', data).success(function(data) {
			customers.push(data);
			getTasks(customers);
		});
	};

	// destroy customer
	factory.removeCustomer = function(customer, getAll) {
		$http.post('/customers/delete', customer).success(function(customer) {
			customers.splice(customers.indexOf(customer), 1);
			getAll(customers);
		});
	};

	return factory;

});