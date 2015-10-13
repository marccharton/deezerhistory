///
/// @file : modules/main/main.route.js
///

(function () {

    "use strict";

    angular
        .module('main')
        .config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];

    function routeConfig($routeProvider)
    {
        $routeProvider
            .when('/', {
                templateUrl: 'js/modules/main/main.tpl.html',
                controller: 'MainController',
                controllerAs : 'main'
            });
    }

})();
