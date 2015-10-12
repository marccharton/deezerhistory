// 
// 
// @filename app.controller.js
// @author kram47
// 
// 

(function() {
	"use strict";

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

})();


