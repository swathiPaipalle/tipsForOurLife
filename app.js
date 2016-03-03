var app = angular.module('tips', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   		when('/about', {
	      templateUrl: 'app/tips/about.html'
		}).

   		when('/beauty', {
	      templateUrl: 'app/tips/beauty.html'
		}).

		when('/cooking', {
		  templateUrl: 'app/tips/cooking.html'
		}).

		when('/health', {
		  templateUrl: 'app/tips/health.html'
		}).

		when('/', {
		  templateUrl: 'app/tips/home.html'
		}).
		otherwise({
	        redirectTo: '/'
      	});

}])

.directive('sideBar', function() {
    return {
        restrict: 'A',
        controller: 'SideBarController',
        templateUrl: 'app/tips/side-bar.html'
    };
})

.controller('SideBarController', function(){
	        
});