'use strict';

angular
  .module('lentodiilitApp')
    .directive('hotellitarjoukset', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/hotellitarjoukset.html'
        };
});
