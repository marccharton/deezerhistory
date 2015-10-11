// *
// * @filename : app.js
// * @author : kram47
// * 
// *

var app = angular.module('app', ['ngRoute', 'ngResource']);

//---------------
// S E R V I C E S
//---------------

app.factory('HistoryItems', ['$resource', function($resource){
 	return $resource('/history', null, {
 		'query': {method:'GET', isArray:true},
 		'update': { method:'PUT'}
 	});
}]);


//---------------
// C O N T R O L L E R S
//---------------

app.controller('HistoryListController', ['$scope', 'HistoryItems', function ($scope, HistoryItems) {
	$scope.items = HistoryItems.query();
	console.log($scope.items);
	/*Todos.success(function(data){
        $scope.todos = data;
      }).error(function(data, status){
        console.log(data, status);
        $scope.todos = [];
      });*/
}]);

//---------------
// R O U T E S
//---------------

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
		  templateUrl: '/historyList.html',
		  controller: 'HistoryListController'
		});
}]);