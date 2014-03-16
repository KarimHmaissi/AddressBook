"use strict";

var mainModule = angular.module("addressBookApp");

mainModule.service("Contact", ["$resource", function($resource) {
	return $resource("http://fast-gorge.herokuapp.com/contacts/:id", null, 
		{
           'update': { method:'PUT' }
        }
    );
}]);