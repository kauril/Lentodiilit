'use strict';

angular
  .module('lentodiilitApp')
    .directive('update', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/update.html'
        };
});