///
/// @file : modules/main/main.controller.js
///

(function () {

    "use strict";

    angular
        .module('main')
        .controller('MainController', MainController);

    // MainController.$inject = [];

    function MainController()
    {
        var vm = this;
        vm.title = "Deezer History";
    }

})();