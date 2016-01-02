 angular.module('waitstaffCalc')
	.controller('NewMealCtrl', function($scope, $rootScope){

		$scope.submit = function(){
			if ($scope.mealDetails.$valid){
				customerCharges();
			}
		};

		$scope.cancel = function(){
			$scope.data = [];
			$scope.mealDetails.$setPristine();
		};
		
		customerCharges = function(){
			var price = parseInt($scope.data.price);
			var tax = parseInt($scope.data.tax);
			var tip = parseInt($scope.data.tip);

			$rootScope.subtotal = (tax/100 * price) + price;
			$rootScope.chargeTip = tip/100 * price;
			$rootScope.earningsInfo($rootScope.chargeTip);
		};
	})