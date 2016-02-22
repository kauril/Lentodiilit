'use strict';

angular.module('lentodiilitApp')
    .controller('dealsCtrl', function ($scope, AjaxFactory ) {

        $scope.getDeals = function () {
            $scope.test = false;
$scope.kategoria ='dsaf';
            console.log('deals');


            // kutsu deals-funktiota AjaxFactorystä
            var request = AjaxFactory.deals();
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data.deals);
                $scope.deals = response.data.deals;

            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };

        $scope.getPrice = function (price) {

            var res = price.split(',');
            res.reverse();
            return res[0];
        };

        $scope.select = function () {
            console.log($scope.cname);
            $scope.kategoria = $scope.cname;
            console.log($scope.kategoria); 
            
            
            //$window.location.reload();
        };

        $scope.getDates = function (date) {
            var res = date.split(',');
            return res[0];
        };

$scope.getDeals();


       

    });