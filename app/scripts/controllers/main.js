'use strict';

angular.module('addressBookApp')
  .controller('MainCtrl', function ($scope, $filter, Contact) {

	/*Get all contacts*/
	Contact.query().$promise.then(function(result) {
		console.log(result);
		$scope.contacts = result;
		sortList();
	});

	// Sort contacts list alphabetically by surname
	// This filter is not added to the markup. 
	// This is to ensure the contacts list is not sorted during an update.
	var sortList = function () {
		$scope.contacts = $filter('orderBy')($scope.contacts, "surname");
	}


  	/*Add new contact*/

  	//show/hide add new contact form
  	$scope.showNewContactForm = function() {
  		$scope.showAddNew = !$scope.showAddNew;
  	};
  	$scope.showAddNew = false;

  	$scope.saveNewContact = function(newContact) {
  		var date = new Date().toISOString();
  		newContact.createdAt = date;
  		newContact.updatedAt = date;
  		console.log("saving new contact");
  		console.log(newContact);

  		$scope.contacts.push(newContact);

  		//send to server
  		Contact.save({}, newContact);

  		$scope.newContact = {};
  		$scope.showAddNew = false;

  		sortList();
  	};


  	//clear form fields
  	$scope.clear = function() {
  		$scope.newContact = {};
  	};


  	/*remove contact*/
  	$scope.deleteContact = function(contact) {

  		//send delete to backend
  		Contact.delete({id: contact.id});

  		$scope.contacts.splice($scope.contacts.indexOf(contact), 1);

  	};	


  	/*edit contact*/
  	$scope.editingContact = "";

  	//Editing mode shows edit/delete buttons on contacts
	$scope.editingMode = false;

  	$scope.editContact = function(contact) {
  		// $scope.editingContact = contact;
  		contact.edit = !contact.edit;
  	};

  	$scope.updateContact = function(contact) {

  		//send update to server
		Contact.update({id: contact.id}, contact);

  		contact.edit = false;

  		sortList();
  	}


  });
