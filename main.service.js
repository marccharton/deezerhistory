///
/// @file : modules/main/main.service.js
///

(function () {

    "use strict";

    angular
        .module('main')
        .service('MainService', MainService);

    MainService.$inject = ["$http"];

    function MainService($http)
    {
        var service = {
            CallIndex: CallIndex
        };

        return service;

        ////////////

        function CallIndex () {
            $http({
              method: 'GET',
              url: 'http://localhost:3000'
            }).then(successCallback, errorCallback);

            function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            } 

            function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("pas gg");
                console.log('')
            }
        }
        
    }

})();