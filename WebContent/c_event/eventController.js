/**
 * created by ikism on Dec 8, 2016
 */

app.controller('eventController', function($scope, eventService, $http,
		$location) {
	console.log('starting eventService')

	$scope.event = {
		eventId : '',
		deadLine : '',
		description : '',
		eventCreatedDate : '',
		title : '',
		userId : ''
	};

	$scope.events;

	function fetchAllEvents() {
		console.log('entering all events')
		eventService.fetchAllEvents().then(function(data) {
			$scope.events = data;
		}, function(error) {
			console.error('Error : ' + error)
		});
	}
	;
	fetchAllEvents();

	$scope.createEvent = function(event) {
		console.log('entering create event')
		eventService.createEvent(event).then(function() {
			fetchAllEvents()
			$location.path('#/eventList')
		}, function(error) {
			console.log('Error : ' + error)
		});
	};

	$scope.submit = function() {
		{
			console.log('Saving New event', $scope.event);
			$scope.createEvent($scope.event);
		}
		$scope.reset();
	};

	$scope.updateEvent = function() {
		console.log('updating Event Id: ' + $scope.event.eventId)
		eventService.updateEvent($scope.event.eventId).then(function() {
			fetchAllEvents();
			$location.path('#/eventList')
		}, function(error) {
			console.log('Update Error :' + error)
		})
	};

	$scope.deleteEvent = function(eventId) {
		console.log('deleting')
		eventService.deleteEvent(eventId).then(function() {
			alert('Deleted Successfully')
			$location.path('#/eventList')
		}, function() {
			console.log('Unable to delete')
		})
	};

	$scope.getById = function(eventId) {
		console.log('getting')
		eventService.getEventById(eventId).then(function(data) {
			$scope.event = data;
			console.log('Data' + $scope.event.title)
		}, function() {
			console.log('Unable to getById')
		})
	};

	$scope.reset = function() {
		$scope.event = {
			eventId : '',
			deadLine : '',
			description : '',
			eventCreatedDate : '',
			title : '',
			userId : ''
		};
		$scope.myForm.$setPristine();
	};

})