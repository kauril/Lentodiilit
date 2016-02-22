'use strict';

angular
  .module('lentodiilitApp')
    .directive('matkatarjoukset', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/matkatarjoukset.html'
        };
});
