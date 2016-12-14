/**
 * created by ikism on Dec 8, 2016
 */

app.controller('eventController', [ '$scope', 'eventService', '$http',
		'$location', '$window',
		function($scope, eventService, $http, $location, $window) {
			console.log('starting eventService')

			$scope.event = {
				eventId : '',
				deadLine : '',
				description : '',
				eventCreatedDate : '',
				title : '',
				userId : ''
			};

			$scope.completedEvents;
			$scope.unCompletedEvents;

			function fetchUncompletedEvents() {
				console.log('entering all events')
				eventService.fetchUncompletedEvents().then(function(data) {
					$scope.unCompletedEvents = data;
				}, function(error) {
					console.error('Error : ' + error)
				});
			}
			;

			function fetchcompletedEvents() {
				console.log('entering all events')
				eventService.fetchcompletedEvents().then(function(data) {
					$scope.completedEvents = data;
				}, function(error) {
					console.error('Error : ' + error)
				});
			}
			;

			fetchUncompletedEvents();
			fetchcompletedEvents();

			$scope.createEvent = function(event) {
				console.log('entering create event')
				eventService.createEvent(event).then(function() {
					fetchUncompletedEvents()
					$location.path("/eventList");
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
					$location.path("/eventList")
				}, function(error) {
					console.log('Update Error :' + error)
				})
			};

			$scope.deleteEvent = function(eventId) {
				console.log('deleting')
				eventService.deleteEvent(eventId).then(function() {
					alert('Deleted Successfully')
					$location.path("/eventList")
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

			$scope.completeEvent = function(eventId) {
				console.log('entering completeEvent controller')
				eventService.complete(eventId).then(function() {
					console.log('Completed')
					fetchUncompletedEvents();
					fetchcompletedEvents();
					$location.path("/eventList")
				}, function() {
					console.log('unable to Complete')
				})
			};

			$scope.unCompleteEvent = function(eventId) {
				console.log('entering unCompleteEvent controller')
				eventService.unComplete(eventId).then(function() {
					console.log('unCompleted')
					fetchUncompletedEvents();
					fetchcompletedEvents();
					$location.path("/eventList")
				}, function() {
					console.log('unable to unCompleted')
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

		} ])