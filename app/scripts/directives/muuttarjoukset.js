'use strict';

angular
  .module('lentodiilitApp')
    .directive('muuttarjoukset', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/muuttarjoukset.html'
        };
});
