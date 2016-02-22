'use strict';

angular
  .module('lentodiilitApp')
    .directive('deals', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/deals.html'
        };
});



