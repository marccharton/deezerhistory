// 
// 
// @filename app.route.js
// @author kram47
// 
// 

(function() {
	"use strict";

	angular
    	.module('app')
    	.config(routeConfig);

	function routeConfig($routeProvider)
	{
		$routeProvider
			.when('/', {
			  templateUrl: '/historyList.html',
			  controller: 'HistoryListController'
			});
	}

})();


