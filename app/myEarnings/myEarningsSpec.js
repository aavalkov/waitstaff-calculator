describe('reset', function(){
  beforeEach(module('waitstaffCalc'));

  var $scope,ctrl;
  beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $rootScope.subtotal = 45;
      $rootScope.chargeTip = 100;
      $rootScope.tipTotal = 20;
      $rootScope.mealCount = 2;
      $rootScope.avgTip = 20;

	  ctrl = $controller('EarningsCtrl',{
	  	$scope: $scope
	  });
  }));

  it ('all of the eraning values will reset', inject(function($rootScope) {
    $scope.reset()
    expect($rootScope.subtotal).toBe(0);
  }));
});
