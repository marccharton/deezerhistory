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
            return $http({
              method: 'GET',
              url: 'http://localhost:3000'
            }).then(successCallback, errorCallback);

            function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            } 

            function errorCallback(err) {
                // called asynchronously if an error occurs
                // or server returns err with an error status.
                var error = {
                    "StatusCode" : err.status,
                    "StatusText" : err.statusText,
                    "Description" : err.data,
                };
                console.log("[Error "+error.StatusCode+"]" + " : " + error.StatusText + "\nDescription : \n" + error.Description);
            }
        }
        
    }

})();