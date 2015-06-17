// var should be plural and lowercase
var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');

module.exports = function(app) {
	
	// ****** CUSTOMERS ROUTES *******

	// get customers
	app.get('/customers', function(request, response) {
		customers.show(request, response);
	});

	// add customer
	app.post('/customers/add', function(request, response) {
		customers.add(request, response);
	});

	// destroy customer
	app.post('/customers/delete', function(request, response) {
		customers.delete(request, response);
	});

	// ****** ORDERS ROUTES *******

	// get orders
	app.get('/orders', function(request, response) {
		orders.show(request, response);
	});

	// add order
	app.post('/orders/add', function(request, response) {
		orders.add(request, response);
	});

};