angular.module('BandApp', ['ngRoute', 'RouteControllers']);

angular.module('BandApp').config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/media/theband', {
		templateUrl: 'templates/theband.html',
	})
	.when('/media/audio', {
		templateUrl: 'templates/audio.html'
	})
	.when('/media/video', {
		templateUrl: 'templates/video.html'
	})
	.when('/signup', {
		templateUrl: 'templates/signup.html'
		controller: 'SignupController'
	})
	.when('/login', {
		templateUrl: 'templates/login.html'
	});
});