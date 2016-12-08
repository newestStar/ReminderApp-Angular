/**
 * created by ikism on Dec 7, 2016
 */

var app = angular.module('myApp', [ 'ngRoute' ]);

console.log('---starting app.js')

app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'c_common/middle.html'
	}).when('/contactUs', {
		templateUrl : 'c_common/contactUs.html'
	})

	// User Module

	.when('/register', {
		templateUrl : 'c_common/register.html',
		controller : 'userController'
	}).when('/login', {
		templateUrl : 'c_common/login.html',
		controller : 'userController'
	})
	.otherwise({redirectTo:'/'})

})