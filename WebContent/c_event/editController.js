/**
 * created by ikism on Dec 9, 2016
 */

app.controller('editController', function($scope, $routeParams, $location,
		eventService) {
	console.log('entering editController')

	var eventId = $routeParams.eventId;

	$scope.event = eventService.getEvent(eventId).then(function(response) {
		console.log(response.status)
		$scope.event = response.data;
	}, null)

	$scope.update = function() {
		console.log('entering update function')
		eventService.updateEvent(eventId, $scope.event);
		console.log('updated successfully')
		alert('updated successfully');
		$location.path('/');
	};

})