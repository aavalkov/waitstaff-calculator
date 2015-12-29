describe('customerCharges', function(){
	beforeEach(module('waitstaffCalc'));

	var scope;
	beforeEach(inject(function($rootScope, $scope) {
	    scope = $rootScope.$new();
	    $scope.data.price = 100;
		$scope.data.tax = 9;
		$scope.data.tip = 20
	}));

	it ('should set the subtotal', inject(function($rootScope, $scope) {
		customerCharges()
		expect($rootScope.subtotal).toBe(109);
	}));
});