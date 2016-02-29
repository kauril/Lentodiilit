'use strict';

angular
    .module('lentodiilitApp')
    .factory('AerisFactory', function ($http) {
        var id = 'GBioFWelDVHbCvlpQnqpi';
        var key = 'sOJxoHdYK8J4SdqHd1C1gmHhL5tUilKjsRpI7hvc';
        var aerisurlbase = 'http://api.aerisapi.com/observations/';
        var owmapikey = 'f32198c937ed4c7335c93b0ffacffeed';
        var owmurlbase = 'api.openweathermap.org/data/2.5/weather?q=';
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
    
        aerisFunctions.owmWeather = function (args) {
            var city = args;
            console.log(city);
            return $http.get(owmurlbase + city + '&units=metric&lang=fi&APPID=' + owmapikey );
        };

        return aerisFunctions;

    });