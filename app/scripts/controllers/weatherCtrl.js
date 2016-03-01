'use strict';

angular.module('lentodiilitApp')
    .controller('weatherCtrl', function ($scope, AerisFactory) {
        var timer = null;
        var i = 0;
        $scope.saa = null;
        

        $scope.$watch('diili', function (newValue, oldValue) {
            console.log(newValue);
            $scope.saa = null;
            if (newValue !== undefined) {
                var res = newValue.tags.split(' ');
                timer = setInterval(function () {
                    $scope.owm(res);
                }, 200);
            }

        });


        $scope.owm = function (args) {
            var request = AerisFactory.owmWeather(args[i]);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(i + ', ' + response.data.name + ', ' + args[i]);
                if (response.data.name === args[i]) {
                    console.log(response.data.weather[0].description);
                    $scope.saa = response.data;
                    
                }

                i++;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);

                i++;
            });


            if (i >= args.length) {
                clearInterval(timer);
            }
            console.log($scope.saa);
            
        };







    });