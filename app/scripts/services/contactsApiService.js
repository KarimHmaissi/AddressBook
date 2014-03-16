"use strict";

var mainModule = angular.module("addressBookApp");

mainModule.service("contactsApi", function($http, $q) {
	return {

		/**
		 * Get all contacts
		 * /contacts 
		 */
		get: function() {
			var defer = $q.defer();

			$http.get("http://fast-gorge.herokuapp.com/contacts")

			.success(function(result) {
				console.log(result);
				defer.resolve(result);
			})

			.error(function(error) {
				console.log("error");
				console.log(error);
				defer.resolve({error:"unable to contacts /contacts"});
			});

			return defer.promise;
		}

	};
});