/**
 * created by ikism on Dec 8, 2016
 */

app.factory('eventService', function($http) {
	console.log('entering eventService')
	var BASE_URL = "http://localhost:8083/ReminderApp"

	var eventService = this;

	eventService.fetchAllEvents = function() {

		console.log('----entering getAllUsers')
		return $http.get(BASE_URL + "/event/getMyEvents").then(
				function(response) {
					console.log('Status : ' + response.status)
					return response.data
				}, function(response) {
					console.log('Error : ' + response.data)
					return response.data
				});
	}, eventService.createEvent = function(event) {
		console.log('entering create event in service')
		return $http.post(BASE_URL + "/event/addEvent/", event).then(
				function(response) {
					console.log('creating event')
					console.log('Status :' + response.status)
					return response.data
				}, function(errResponse) {

					console.log('Error while creating event')
					return response.data
				});
	};

	return eventService;

});
