/**
 * created by ikism on Dec 8, 2016
 */

app.factory('userService', function($http) {
	console.log('entering userService')

	var BASE_URL = "http://localhost:8083/ReminderApp"

	var userService = this;

	userService.createUser = function(user) {
		console.log('entering userService')
		return $http.post(BASE_URL + "/user/register", user).then(
				function(response) {
					console.log('status: ' + response.status)
					return response.data
				}, function() {
					console.error('while creating user')
					return response.status
				});
	},

	userService.login = function(user) {
		console.log('login service')
		return $http.post(BASE_URL + "/user/validate/", user).then(function(response) {
			return response.data
		}, null)
	}

	return userService;
})