"use strict";

var mainModule = angular.module("addressBookApp");

mainModule.service("Contact", function($resource) {
	return $resource("http://fast-gorge.herokuapp.com/contacts/:id", null, 
		{
           'update': { method:'PUT' }
        }
    );
});