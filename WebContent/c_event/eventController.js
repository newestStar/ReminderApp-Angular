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
	};
	fetchAllEvents();

	$scope.createEvent = function(event) {
		console.log('entering create event')
		eventService.createEvent(event).then(function() {
			fetchAllEvents()
			$location.path('/eventList')
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