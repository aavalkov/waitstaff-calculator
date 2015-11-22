angular.module('waitstaffCalc', [])
	.controller('waitstaffCalcController', function($scope){
		$scope.tipTotal = 0;
		$scope.mealCount = 0;

		$scope.submit = function(){
			if ($scope.mealDetails.$valid){
				console.log('The form is valid');
				customerCharges();
			} else {
				console.log('The form is invalid');
			}
		};

		$scope.cancel = function(){
			$scope.data = [];
		};

		customerCharges = function(){
			var price = parseInt($scope.data.price);
			var tax = parseInt($scope.data.tax);
			var tip = parseInt($scope.data.tip);

			$scope.subtotal = (tax/100 * price) + price;
			$scope.chargeTip = tip/100 * price;
			earningsInfo($scope.chargeTip);
		};

		earningsInfo = function(tipAmount){
			$scope.tipTotal += parseInt(tipAmount);
			$scope.mealCount += 1;
			$scope.avgTip = $scope.tipTotal/$scope.mealCount;
		};

		$scope.reset = function(){
			$scope.data = [];
			$scope.mealDetails.$setPristine();
			$scope.subtotal = "";
			$scope.chargeTip = "";
			$scope.tipTotal = "";
			$scope.mealCount = "";
			$scope.avgTip = "";
		}
	});



