'use strict';

angular
  .module('lentodiilitApp')
    .directive('lentotarjoukset', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/lentotarjoukset.html'
        };
});
