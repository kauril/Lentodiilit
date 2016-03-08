'use strict';

angular
    .module('lentodiilitApp')
    .factory('AerisFactory', function ($http) {
        
        var owmapikey = 'f32198c937ed4c7335c93b0ffacffeed';
        var owmurlbase = 'http://api.openweathermap.org/data/2.5/weather?q=';
        var aerisFunctions = {};

        
    
        aerisFunctions.owmWeather = function (args) {
            //return args;
            return $http.get(owmurlbase + args + '&units=metric&lang=fi&APPID=' + owmapikey );
        };

        return aerisFunctions;

    });