///
/// @file : modules/main/main.controller.js
///

(function () {

    "use strict";

    angular
        .module('main')
        .controller('MainController', MainController);

    MainController.$inject = ["$http", "MainService"];

    function MainController($http, MainService)
    {
        var vm = this;
        
        vm.title = "Deezer History";
        vm.CallIndex = CallIndex;

        function CallIndex() {
            MainService.CallIndex()
                .then(function(data) {
                    if (data)
                        console.log(data);
                });
        }
        
    }

})();