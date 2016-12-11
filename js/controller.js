angular.module('RouteControllers', [])
	
/*	.controller('HomeController', function($scope) {
		$scope.title = "Welcome $scope.signupUser.username";
	})*/

	.controller('SignupController', function($scope) {

		$scope.signupUser = {};

		$scope.submitForm = function() {
			if ($scope.signupForm.$valid) {
				$scope.signupUser.username = $scope.user.username;
				$scope.signupUser.password = $scope.user.password;
				$scope.signupUser.email = $scope.user.email;
			}

			console.log($scope.signupUser.username + " " + $scope.signupUser.password + " " + $scope.signupUser.email);
			alert("Hello" + " " + $scope.signupUser.username + ", " + "welcome to Liz Seaver's Unofficial Fansite");
		}


/*	.controller('namesCtrl', function($scope) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
	})*/

	});