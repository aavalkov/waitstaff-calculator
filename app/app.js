angular.module('waitstaffCalc', ['ngRoute','ngAnimate'])
	.config(function($routeProvider){
		$routeProvider.when('/',{
			templateUrl:'home/home.html'
		}).when('/new-meal', {
			templateUrl:'newMeal/newMeal.html',
			controller: 'NewMealCtrl'
		}).when('/my-earnings',{
			templateUrl:'myEarnings/myEarnings.html',
			controller: 'EarningsCtrl'
		}).when('/error', {
		    template : '<p>Error - Page Not Found</p>'
		})
		.otherwise('/error');
	})
	.run(function($rootScope, $location, $timeout){
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

		$rootScope.$on('$routeChangeError', function() {
        	$location.path("/error");
	    });
	    $rootScope.$on('$routeChangeStart', function() {
	        $rootScope.isLoading = true;
	    });
	    $rootScope.$on('$routeChangeSuccess', function() {
	      $timeout(function() {
	        $rootScope.isLoading = false;
	      }, 1000);
	    });
	})