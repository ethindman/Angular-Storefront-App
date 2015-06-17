app.controller('CustomersController', function($scope, CustomerFactory) {
	
	// get customers
	CustomerFactory.getCustomers(function(data) {
		$scope.customers = data;
	})

	$scope.addCustomer = function() {
		var validCustomer = $scope.newCustomer.name;
		var match = "";
		for(var i in $scope.customers) {
			if($scope.customers[i].name.toLowerCase() == validCustomer.toLowerCase())
			{
				match = true;
			}
		}
		if(match) {
			$scope.error = "Sorry that name already exists!";
		}
		else if(!validCustomer) {
			$scope.error = "Name field cannot be blank.";
		}
		else {
			$scope.error = '';
			CustomerFactory.addCustomer($scope.newCustomer, function() {
				CustomerFactory.getCustomers(function(data) {
					$scope.customers = data;
				});
				$scope.newCustomer = {};
			});
		}
	};

	$scope.removeCustomer = function(customer) {
		CustomerFactory.removeCustomer(customer, function() {
			CustomerFactory.getCustomers(function(data) {
				$scope.customers = data;
			});
		});
	};

});