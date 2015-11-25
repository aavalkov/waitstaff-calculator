angular.module('waitstaffCalc', ['ngRoute'])
	.run(function($rootScope){
		$rootScope.tipTotal = 0;
		$rootScope.mealCount = 0;
		$rootScope.subtotal = 0;
		$rootScope.chargeTip = 0;
		$rootScope.avgTip = 0;

		$rootScope.earningsInfo = function(tipAmount){
			$rootScope.tipTotal += parseInt(tipAmount);
			$rootScope.mealCount += 1;
			$rootScope.avgTip = $rootScope.tipTotal/$rootScope.mealCount;
		};
	})
	.config(function($routeProvider){
		$routeProvider.when('/',{
			templateUrl:'home.html',
			controller:'HomeCtrl'
		}).when('/new-meal', {
			templateUrl:'newMeal.html',
			controller: 'NewMealCtrl'
		}).when('/my-earnings',{
			templateUrl:'myEarnings.html',
			controller: 'EarningsCtrl'
		}).when('/error', {
		    template : '<p>Error - Page Not Found</p>'
		})
		.otherwise('/error');
	}).controller('HomeCtrl', function($scope){
		//empty
	})
	.controller('NewMealCtrl', function($scope, $rootScope){

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
	.controller('EarningsCtrl', function($scope,$rootScope){
		$scope.reset = function(){
			$rootScope.subtotal = 0;
			$rootScope.chargeTip = 0;
			$rootScope.tipTotal = 0;
			$rootScope.mealCount = 0;
			$rootScope.avgTip = 0;
		}
	});

