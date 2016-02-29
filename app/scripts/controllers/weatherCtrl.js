'use strict';

angular.module('lentodiilitApp')
    .controller('weatherCtrl', function ($scope, AerisFactory) {


        /*$scope.getWeather = function (args) {

            var res = args.split(' ');
            res.reverse();

            var request = AerisFactory.weatherEurope(res);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                $scope.weather = response.data;
                return $scope.weather;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
            return res[0];
        };*/

        $scope.getWeather = function (args) {

            
            var res = args.split(' ');
            res.reverse();
            
            
            console.log(res[0]);
            if (res[0] === 'Airlines' || res[0] === 'Norwegian' || res[0] === 'Matkatarjoukset' || res[0] === 'SAS') {
    console.log('tämä tilalle: '+ res[1]);
                if(res[1] === 'Airlines' || res[1] === 'Norwegian' || res[1] === 'Matkatarjoukset' || res[1] === 'SAS' || res[1] === 'lennot') {
                    console.log('tämä tilalle kaksi: '+ res[2]);
                }
}
            
            

            /*var request = AerisFactory.weatherEurope(res[0]);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data.response.ob.tempC);
                var temp = response.data.response.ob.tempC;
                return temp;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
                 
            });*/
            
            
        };
    $scope.owm = function () {

            
            
            var res = 'london';
           
            
            console.log(res);
         

            var request = AerisFactory.owmWeather(res);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
                 
            });
            
        };
    $scope.owm();
    







    });