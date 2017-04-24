// Defining the modules/dependencies
angular.module('BandApp', ['ngRoute', 'RouteControllers']);
// App config defining routes
angular.module('BandApp').config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController',
	})
	.when('/theband', {
		templateUrl: 'templates/theband.html',
	})
	.when('/media/audio', {
		templateUrl: 'templates/audio.html',
	})
	.when('/media/video', {
		templateUrl: 'templates/video.html',
	})
	.when('/jukebox', {
		templateUrl: 'templates/jukebox.html',
		controller: 'namesCtrl'
	})
	.when('/tour', {
		templateUrl: 'templates/tour',
	})
	.when('/bookings', {
		templateUrl: 'templates/bookings',
	})
	.when('/signup', {
		templateUrl: 'templates/signup.html',
		controller: 'SignupController'
	})
	.when('/login', {
		templateUrl: 'templates/login.html',
	});
});