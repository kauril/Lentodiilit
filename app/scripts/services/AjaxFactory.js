'use strict';

angular
    .module('lentodiilitApp')
    .factory('AjaxFactory', function ($http) {
        var urlBase = 'https://umbrella.digipalvelutehdas.fi/lentodiilit';
        var apiKey = '8lipjGWw23PZzbOKFUS9JOSbGhchabRT5JKMrG5s';
        var ajaxFunctions = {};
    
    //Haetaan diilit

        ajaxFunctions.deals = function () {
            return $http.get(urlBase + '/deals?api_key=' + apiKey);
        };
    
    //Haetaan milloin sivu päivitetty
    
        ajaxFunctions.update = function () {
            return $http.get(urlBase + '/lastupdate?api_key=' + apiKey);
        };
    
    //Haetaan kategoriat
    
        ajaxFunctions.categories = function () {
            return $http.get(urlBase + '/categories?api_key=' + apiKey);
        };
        
        
        
        return ajaxFunctions;
    });
