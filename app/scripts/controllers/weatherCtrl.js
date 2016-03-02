'use strict';

angular.module('lentodiilitApp')
    .controller('weatherCtrl', function ($scope, AerisFactory) {
        var timer = null;



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
            var i = 0;
            var request = AerisFactory.owmWeather(args[i]);
            request.then(function (response) {
                // tee vastauksella jotain
                $scope.kuvaus = 'Ei saatavaika';

                console.log(i + ', ' + response.data.name + ', ' + args[i]);
                if (response.data.name === args[i]) {
                    $scope.saa = response.data;
                    $scope.kuvaus = $scope.saa.weather[0].description;
                    console.log('Kuvaus' + $scope.kuvaus);
                    clearInterval(timer);
                }
                i++;
                if (i = args.length) {

                    clearInterval(timer);
                }
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);

                i++;
            });



            console.log(args.length);
        };







    });