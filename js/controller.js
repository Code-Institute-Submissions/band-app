angular.module('RouteControllers', [])

	// controller for registration page signup.html
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
		};

	})
	// controller for disco.html music search
	.controller('namesCtrl', function($scope) {
	    $scope.names = [
        {'name':'Eclectic Acoustic',
        'url': 'audio/AcousticGuitar1.mp3'
	    },
	    {'name':'A Darker Heart',
	    'url':'audio/ADarkerHeart.mp3'
		},
		{'name':'Autumn Sunset',
		'url': 'audio/AutumnSunset.mp3'
		},
		{'name':'Cold Morning',
		'url':'audio/ColdMorning.mp3'
		},
		{'name':'Serenity',
		'url':'audio/serenity.mp3'
		},
		{'name':'Radio Rock',
		'url':'audio/RadioRock.mp3'
		},
		{'name':'Back To The Wood',
		'url':'audio/BackToTheWood.mp3'
		},
		{'name':'Amazing Grace',
		'url':'audio/AmazingGrace.mp3'
		},
		{'name':'Smells Like Grunge',
		'url':'audio/SmellsLikeGrunge.mp3'
		}

	    ];
	})
	// controller for home page title
	.controller('HomeController', function($scope) {
        $scope.title = "Welcome to Singer-Songwriter Liz Seaver's Angular App!";
    });