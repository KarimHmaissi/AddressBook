'use strict';

angular.module('addressBookApp')
  .controller('MainCtrl', function ($scope, $filter, contactsApi) {
  	$scope.contacts = [
  		{
			"first_name": "Chris",
		    "surname": "aillerww",
		    "address": null,
		    "phone_number": "07894556677",
		    "email": "pirate.chrxs@gmail.com",
		    "id": 7,
		    "createdAt": "2014-02-26T21:55:43.000Z",
		    "updatedAt": "2014-03-03T21:58:29.000Z"
  		},
  		{
			"first_name": "Chris",
		    "surname": "billerww",
		    "address": null,
		    "phone_number": "07894556677",
		    "email": "pirate.chrxs@gmail.com",
		    "id": 7,
		    "createdAt": "2014-02-26T21:55:43.000Z",
		    "updatedAt": "2014-03-03T21:58:29.000Z"
  		},
  		{
			"first_name": "Chris",
		    "surname": "cillerww",
		    "address": null,
		    "phone_number": "07894556677",
		    "email": "pirate.chrxs@gmail.com",
		    "id": 7,
		    "createdAt": "2014-02-26T21:55:43.000Z",
		    "updatedAt": "2014-03-03T21:58:29.000Z"
  		},
  		{
			"first_name": "Chris",
		    "surname": "dillerww",
		    "address": null,
		    "phone_number": "07894556677",
		    "email": "pirate.chrxs@gmail.com",
		    "id": 7,
		    "createdAt": "2014-02-26T21:55:43.000Z",
		    "updatedAt": "2014-03-03T21:58:29.000Z"
  		},
  		{
			"first_name": "Chris",
		    "surname": "eillerww",
		    "address": null,
		    "phone_number": "07894556677",
		    "email": "pirate.chrxs@gmail.com",
		    "id": 7,
		    "createdAt": "2014-02-26T21:55:43.000Z",
		    "updatedAt": "2014-03-03T21:58:29.000Z"
  		},
  		{
			"first_name": "Chris",
		    "surname": "zillerww",
		    "address": null,
		    "phone_number": "07894556677",
		    "email": "pirate.chrxs@gmail.com",
		    "id": 7,
		    "createdAt": "2014-02-26T21:55:43.000Z",
		    "updatedAt": "2014-03-03T21:58:29.000Z"
  		},
  		{
			"first_name": "Chris",
		    "surname": "gillerww",
		    "address": null,
		    "phone_number": "07894556677",
		    "email": "pirate.chrxs@gmail.com",
		    "id": 7,
		    "createdAt": "2014-02-26T21:55:43.000Z",
		    "updatedAt": "2014-03-03T21:58:29.000Z"
  		},
  		{
			"first_name": "Chris",
		    "surname": "hillerww",
		    "address": null,
		    "phone_number": "07894556677",
		    "email": "pirate.chrxs@gmail.com",
		    "id": 7,
		    "createdAt": "2014-02-26T21:55:43.000Z",
		    "updatedAt": "2014-03-03T21:58:29.000Z"
  		},
  		{
			"first_name": "Chris",
		    "surname": "jillerww",
		    "address": null,
		    "phone_number": "07894556677",
		    "email": "pirate.chrxs@gmail.com",
		    "id": 7,
		    "createdAt": "2014-02-26T21:55:43.000Z",
		    "updatedAt": "2014-03-03T21:58:29.000Z"
  		},
  		{
			"first_name": "Paul",
		    "surname": "Daniels",
		    "address": "My Address",
		    "phone_number": "01489776655",
		    "email": "paul.daniels@magic.com",
		    "id": 11,
		    "createdAt": "2014-02-26T21:56:06.000Z",
		    "updatedAt": "2014-03-02T19:21:16.000Z"
  		}
  	];

  	// contactsApi.get().then(function(result) {
  	// 	$scope.contacts = result;
  	// });


	// sort contacts list alphabetically by surname
	// this filter is not added to the markup. This is to ensure the contacts list is not sorted during an update.
	var sortList = function () {
		$scope.contacts = $filter('orderBy')($scope.contacts, "surname");
		// list = $filter('orderBy')(list, sortBy);
	}

	sortList();


  	//Add new contact

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
  		$scope.newContact = {};
  		$scope.showAddNew = false;

  		sortList();
  	};
  	

  	//clear form fields
  	$scope.clear = function() {
  		$scope.newContact = {};
  	};


  	//remove contact
  	$scope.deleteContact = function(contact) {
  		$scope.contacts.splice($scope.contacts.indexOf(contact), 1);

  		//send delete to backend
  	};	


  	//edit contact
  	$scope.editingContact = "";

  	//Editing mode shows edit/delete buttons on contacts
	$scope.editingMode = false;

  	$scope.editContact = function(contact) {
  		// $scope.editingContact = contact;
  		contact.edit = !contact.edit;
  	};

  	$scope.updateContact = function(contact) {
  		console.log(contact);
  		contact.edit = false;

  		sortList();
  	}


  });
