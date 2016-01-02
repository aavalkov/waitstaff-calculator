describe('customerCharges', function(){
  beforeEach(module('waitstaffCalc'));

  var $scope,ctrl;
  beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $scope.data = {
        price: 100,
        tax: 9,
        tip: 20
      };

      $scope.mealDetails = {
      	$valid: true 
      };

	  ctrl = $controller('NewMealCtrl',{
	  	$scope: $scope
	  });
  }));

  it ('should set the subtotal', inject(function($rootScope) {
    $scope.submit()
    expect($rootScope.subtotal).toBe(109);
  }));
});


describe('cancel', function(){
	beforeEach(module('waitstaffCalc'));
	var $scope,ctrl;
	beforeEach(inject(function($rootScope, $controller) {
	  $scope = $rootScope.$new();
	  $scope.data = {
	    price: 100,
	    tax: 9,
	    tip: 20
	  };

	  $scope.mealDetails = {
		$setPristine: function() {}
	  };

	  ctrl = $controller('NewMealCtrl',{
	  	$scope: $scope
	  });
	}));

	it ('clear the values in the new meals calculator', inject(function($rootScope) {
	$scope.cancel()
	expect($scope.data).toEqual([]);
	}));
});