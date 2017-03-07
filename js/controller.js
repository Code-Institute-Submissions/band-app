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
		};

	})
	.controller('namesCtrl', function($scope) {
	    $scope.names = [
	        {'name':'Eclectic Acoustic',
	        'url': 'audio/AcousticGuitar1.mp3'
	    },
	    {'name':'A Darker Heart',
	    'url':'../band-app/audio/ADarkerHeart.mp3'
		},
			{'name':'Autumn Sunset',
			'url': '../band-app/audio/AutumnSunset.mp3'
		},
			{'name':'Cold Morning',
			'url':'../band-app/audio/ColdMorning.mp3'
		}
			// 'Hint Of Justice',
			// 'Let In The Silence',
			// 'Take Me By The Hand',
			// 'Dark Skies',
			// 'No Ones Better Than You',
			// 'Beauty Queen',
			// 'Inside Out',
			// 'I Knew',
			// 'Cant Help Myself',
			// 'The Voice Inside',
			// 'In Between You and Me',
			// 'Down in Tears',
			// 'Exposed',
			// 'Run til Its Gone',
			// 'If I Lost It All',
			// 'The One',
			// 'Hold On',
			// 'Little Song',

	    ];
	

	});