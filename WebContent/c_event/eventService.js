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
	};

	eventService.createEvent = function(event) {
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

	eventService.getEvent = function(eventId) {
		return $http.get(BASE_URL + "/event/getEventById/" + eventId)
	};
	
	eventService.getEventById = function(eventId) {
		return $http.get(BASE_URL + "/event/getEventById/" + eventId).then(function(response){
			return response.data
		},function(error){
			console.error('Error GetById' + error )
		})
	};

	eventService.updateEvent = function(eventId, event) {
		console.log('entering update EventId : ' + eventId)
		console.log('entering update Event :' + event)
		console.log(BASE_URL + "/event/updateEvent/", eventId, event)
		return $http.put(BASE_URL + "/event/updateEvent/" + eventId, event);
	};

	eventService.deleteEvent = function(eventId) {
		console.log('entering service delete')
		return $http['delete'](BASE_URL + "/event/deleteEvent/" + eventId)
				.then(function(response) {
					console.log(response.status)
					return response.status
				}, function() {
					console.log(response.status)
				})
	};
	return eventService;

});
