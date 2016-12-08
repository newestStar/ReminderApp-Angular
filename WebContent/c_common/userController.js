/**
 * created by ikism on Dec 8, 2016
 */
app.controller('userController', function($scope, userService, $http,
		$location, $rootScope) {
	console.log('entering userController')

	$scope.user = {
		userId : '',
		fName : '',
		lName : '',
		role : '',
		emailId : '',
		password : '',
		city : '',
		phoneNo : '',
		errorCode : '',
		errorMessage : ''
	};

	$scope.users;

	$scope.createUser = function(user) {
		console.log('entering create user')
		userService.createUser(user).then(function(response) {
			alert('created successfully')
			$location.path('#/login')
		}, function(error) {
			console.error('error while creating user')
		});
	};

	$scope.submit = function() {
		{
			console.log('saving new user' + $scope.user)
			$scope.createUser($scope.user);
		}
		$scope.reset();
	};

	$scope.login = function(user) {
		console.log('entering login')
		userService.login(user).then(function(response) {
			$scope.user = d;
			if ($scope.user.errorCode == '404') {
				console.log($scope.user.errorMessage)
				$scope.user.emailId = '';
				$scope.user.password = '';
			} else {
				console.log('valid credentials. Navigating to home page')
				$rootScope.currentUser = $scope.user
				$location.path('#/')
			}
		}, function(error) {
			console.error('error while login')
		})
	}

	$scope.reset = function() {
		$scope.user = {
			userId : '',
			fName : '',
			lName : '',
			role : '',
			emailId : '',
			phoneNo : '',
			city : '',
			errorCode : '',
			errorMessage : ''
		};
		$scope.myForm.$setPristine();
	};
})
