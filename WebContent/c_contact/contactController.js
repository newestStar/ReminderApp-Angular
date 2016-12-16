/**
 * created by ikism on Dec 16, 2016
 */

app.controller('contactController',
		function($scope, $location, contactService) {
			console.log('entering contact controller')

			$scope.contact = {
				id : '',
				name : '',
				phoneNumber : '',
				message : '',
				emailId : ''
			};
			
			$scope.createContact = function(contact) {
				console.log('entering create contact')
				contactService.saveContact(contact).then(function(response) {
					alert('Query successfully sended to our database we will contact soon')
					$location.path('#/')
				}, function(error) {
					console.error('error while creating contact')
				});
			};

			$scope.submit = function() {
				{
					console.log('saving new contact' + $scope.contact)
					$scope.createContact($scope.contact);
				}
			};
		})