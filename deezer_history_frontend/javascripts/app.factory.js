// 
// 
// @filename app.factory.js
// @author kram47
// 
// 

(function() {
	"use strict";

	angular
    	.module('app')
    	.factory('HistoryItems', HistoryItems);

	function HistoryItems($scope, HistoryItems)
	{
	 	return $resource('http://127.0.0.1:3000/history', null, {
	 		'query': {method:'GET', isArray:true},
	 		'update': { method:'PUT'}
	 	});
	}

})();