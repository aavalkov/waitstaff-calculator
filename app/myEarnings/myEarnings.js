angular.module('waitstaffCalc')
	.controller('EarningsCtrl', function($scope,$rootScope){
		$scope.reset = function(){
			$rootScope.subtotal = 0;
			$rootScope.chargeTip = 0;
			$rootScope.tipTotal = 0;
			$rootScope.mealCount = 0;
			$rootScope.avgTip = 0;
		}
	});
