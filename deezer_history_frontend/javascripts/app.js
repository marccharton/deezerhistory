// *
// * @filename : app.js
// * @author : kram47
// * 
// *


(function() {
  'use strict';


    angular
        .module('app',
        [
            'ngRoute', 
            'ngResource'
        ]);

        
	//---------------
	// S E R V I C E S
	//---------------

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


	//---------------
	// C O N T R O L L E R S
	//---------------

	angular
    	.module('app')
    	.controller('HistoryListController', HistoryListController);

	function HistoryListController($scope, HistoryItems)
	{
		$scope.items = HistoryItems.query();
		console.log($scope.items);

		/*Todos.success(function(data){
	        $scope.todos = data;
	      }).error(function(data, status){
	        console.log(data, status);
	        $scope.todos = [];
	      });*/
	}

	//---------------
	// R O U T E S
	//---------------

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