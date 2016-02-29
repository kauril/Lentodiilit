'use strict';

angular
  .module('lentodiilitApp')
    .directive('infomodal', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/infomodal.html'
        };
});
