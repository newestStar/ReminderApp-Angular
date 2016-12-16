/**
 * created by ikism on Dec 16, 2016
 */

app.factory('contactService', function($http) {
	console.log('--starting contactService')

	var BASE_URL = "http://localhost:8083/ReminderApp/";

	var contactService = this;

	contactService.saveContact = function(contact) {
		return $http.post(BASE_URL + "/addContact", contact).then(
				function(response) {
					console.log('Status: ' + response.status);
					return response.data;
				}, function() {
					console.error('while saving contactUS')
					return response.status;
				});
	};

	return contactService;
})