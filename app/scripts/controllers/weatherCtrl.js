'use strict';

angular.module('lentodiilitApp')
    .controller('weatherCtrl', function ($scope, AerisFactory) {
        var timer = null;
        var bg = 'rgb(255,255,255)';
        console.log(bg);
        $("#infoModal").attr('style', 'display: block; padding-right: 0px; background-color: '+bg+';');
        $scope.$watch('diili', function (newValue, oldValue) {
            console.log(newValue);
            var i = 0;


            $scope.saa = null;
            if (newValue !== undefined) {
                var res = newValue.tags.split(' ');
                timer = setInterval(function () {
                    $scope.owm(res);
                }, 200);
            }
            $scope.owm = function (args) {

                console.log(i);
                var request = AerisFactory.owmWeather(args[i]);
                request.then(function (response) {
                    // tee vastauksella jotain
                    $scope.kuvaus = 'Ei saatavilla';

                    console.log(i + ', ' + response.data.name + ', ' + args[i]);
                    if (response.data.name === args[i]) {
                        $scope.saa = response.data;
                        $scope.kuvaus = $scope.saa.weather[0].description;
                        console.log('Kuvaus' + $scope.kuvaus);
                        clearInterval(timer);
                        var cv = Math.floor( 255 - $scope.saa.main.temp * 5);
                        console.log(cv);
                        bg ='rgb(255,' + cv + ',0)';
                        console.log(bg);
                         $("#infoModal").attr('style', 'display: block; padding-right: 0px; background-color: '+bg+';');
                    }
                    i++;
                    console.log(i);
                    if (i >= args.length) {

                        clearInterval(timer);
                    }
                }, function (error) {
                    // tee virheellä jotain
                    console.log(error.data);

                    i++;
                });

                console.log(i);
                console.log(args.length);
            };

        });
    
                    


       
    console.log(bg);








    });