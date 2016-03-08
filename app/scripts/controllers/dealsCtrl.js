'use strict';

angular.module('lentodiilitApp')
    .controller('dealsCtrl', function ($scope, AjaxFactory) {

        $scope.getDeals = function () {
            $scope.showTravel = false;

            // kutsu deals-funktiota AjaxFactorystä
            var request = AjaxFactory.deals();
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                $scope.deals = response.data.deals;
                $scope.showAll = true;
                console.log($scope.showAll);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };

        $scope.getTravels = function () {

            console.log('matkatarjoukset');
            $scope.showFlight = false;
            $scope.showAll = false;
            $scope.showHotel = false;
            $scope.showOther = false;
            $scope.showTravel = true;
        };

        $scope.getFlights = function () {

            console.log('lentoterjoukset');
            $scope.showTravel = false;
            $scope.showAll = false;
            $scope.showHotel = false;
            $scope.showOther = false;
            $scope.showFlight = true;
        };

        $scope.getHotels = function () {

            console.log('lentoterjoukset');
            $scope.showTravel = false;
            $scope.showAll = false;
            $scope.showFlight = false;
            $scope.showOther = false;
            $scope.showHotel = true;
        };

        $scope.getOthers = function () {

            console.log('muut terjoukset');
            $scope.showTravel = false;
            $scope.showAll = false;
            $scope.showFlight = false;
            $scope.showHotel = false;
            $scope.showOther = true;
        };

        $scope.getAll = function () {

            console.log('Kaikki diilit');
            $scope.showTravel = false;
            $scope.showAll = true;
            $scope.showFlight = false;
            $scope.showHotel = false;
            $scope.showOther = false;
        };





        $scope.getPrice = function (price) {
            if (price !== undefined) {
                var res = price.split(',');
                res.reverse();
                return res[0];
            }
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

        $scope.prepare = function (args) {
            console.log('prepare');
            $scope.diili = args;
            console.log($scope.diili);
        };

        $scope.getDeals();
    
        var timer = null;

        timer = setInterval(function () {
            var width = $(window).width();
            if (width <= 767) {

                $("#all").attr("data-toggle", "collapse");
                $("#flight").attr("data-toggle", "collapse");
                $("#travel").attr("data-toggle", "collapse");
                $("#hotel").attr("data-toggle", "collapse");
                $("#other").attr("data-toggle", "collapse");
            }
            if (width > 767) {

                $("#all").removeAttr("data-toggle", "collapse");
                $("#flight").removeAttr("data-toggle", "collapse");
                $("#travel").removeAttr("data-toggle", "collapse");
                $("#hotel").removeAttr("data-toggle", "collapse");
                $("#other").removeAttr("data-toggle", "collapse");
            }

        }, 2000);




    });