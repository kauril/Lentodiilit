'use strict';

angular
  .module('lentodiilitApp')
    .directive('radioBox', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/radiobox.html'
        };
});