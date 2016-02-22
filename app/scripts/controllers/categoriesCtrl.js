'use strict';

angular.module('lentodiilitApp')
  .controller('categoriesCtrl', function ($scope, AjaxFactory) {
    
    
    
   $scope.naytacat = false;
    
    $scope.getCategories = function(){
      
        var request = AjaxFactory.categories();
        request.then(function(response){
            // tee vastauksella jotain
            
            console.log(response.data.categories);
            $scope.categories = response.data.categories;
            
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
        
    };
    
   
    
    $scope.getCategories();
    
    $(window).scroll(function(){ 
  var $el = $('.steady'); 
  var isPositionFixed = ($el.css('position') === 'fixed');
  if ($(this).scrollTop() > 300 && !isPositionFixed){ 
    $('.steady').css({'position': 'fixed', 'top': '0px'}); 
  }
  if ($(this).scrollTop() < 300 && isPositionFixed)
  {
    $('.steady').css({'position': 'static', 'top': '0px'}); 
  } 
});
    
  });