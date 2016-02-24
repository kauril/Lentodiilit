'use strict';

angular
    .module('lentodiilitApp')
    .factory('AerisFactory', function ($http) {
        var id = 'GBioFWelDVHbCvlpQnqpi';
        var key = 'sOJxoHdYK8J4SdqHd1C1gmHhL5tUilKjsRpI7hvc';
        var aerisurlbase = 'http://api.aerisapi.com/observations/';
        var aerisFunctions = {};

        aerisFunctions.weatherEurope = function (args) {
            var city = args;
            return $http.get(aerisurlbase + city + ',europe?client_id=' + id + '&client_secret=' + key);
        };
    
        aerisFunctions.weatherAsia = function (args) {
            var city = args;
            return $http.get(aerisurlbase + city +',asia?client_id=' + id + '&client_secret=' + key);
        };
    
        aerisFunctions.weatherUsa = function (args) {
            var city = args;
            return $http.get(aerisurlbase + city +',usa?client_id=' + id + '&client_secret=' + key);
        };

        return aerisFunctions;

    });