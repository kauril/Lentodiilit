'use strict';

angular
  .module('lentodiilitApp')
    .directive('radiobox', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/radiobox.html'
        };
});