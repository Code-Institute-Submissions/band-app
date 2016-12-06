angular.module('BandApp', ['ngRoute', 'RouteControllers']);

angular.module('BandApp').config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/accounts/register', {
		templateUrl: 'templates/regsiter.html',
		controller: 'RegisterController'
	});
});