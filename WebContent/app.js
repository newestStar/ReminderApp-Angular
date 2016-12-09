/**
 * created by ikism on Dec 7, 2016
 */

var app = angular.module('myApp', [ 'ngRoute','ngCookies' ]);

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
	
	// Event module
	
	.when('/addEvent',{
		templateUrl : 'c_event/addEvent.html',
		controller : 'eventController'
	})
	.when('/eventList',{
		templateUrl : 'c_event/eventList.html',
		controller : 'eventController'
	})
	.otherwise({redirectTo:'/'})

})