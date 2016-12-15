/**
 * created by ikism on Dec 8, 2016
 */
app
		.controller(
				'userController',
				function($scope, userService, $http, $location, $rootScope,$cookies) {
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
						userService
								.login(user)
								.then(
										function(data) {
											$scope.user = data;
											if ($scope.user.errorCode == '404') {
												alert($scope.user.errorMessage)
												$scope.user.emailId = '';
												$scope.user.password = '';
											} else {
												console
														.log('valid credentials. Navigating to home page')
												$rootScope.currentUser = $scope.user
												$http.defaults.headers.common['Authorization'] = 'Basic'
														+ $rootScope.currentUser;
												$cookies.put('currentUser',
														$rootScope.currentUser);
												$location.path('#/')
											}
										}, function(error) {
											console.error('error while login')
										})
					};

					$scope.validate = function() {

						console.log('logging in..' + $scope.user)
						$scope.login($scope.user);

					};

					$scope.logout = function() {
						console.log('logging out')
						$rootScope.currentUser = null;
						$cookies.remove('currentUser');
						userService.logout()
						$location.path('#/');
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
