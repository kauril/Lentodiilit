'use strict';

angular.module('lentodiilitApp')
  .controller('updateCtrl', function ($scope, AjaxFactory) {
    
   
    
    $scope.getUpdate = function(){
      
        var request = AjaxFactory.update();
        request.then(function(response){
            // tee vastauksella jotain
            
            console.log(response.data.lastupdatetime[0].datetime);
            $scope.update = response.data.lastupdatetime[0].datetime;
            
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
    
    
    $scope.getUpdate();
    
    
  });