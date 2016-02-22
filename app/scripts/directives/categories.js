'use strict';

angular
  .module('lentodiilitApp')
    .directive('categories', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/categories.html'
        };
});