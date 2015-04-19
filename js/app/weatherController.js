(function(angular) {

    angular.module('weatherModule')
        .controller('weatherController', ['$scope','LocationWeather',
        function($scope, LocationWeather) {

            var locationWeather = new LocationWeather({
                location: 'Cluj-Napoca',
                conditions: 'Sunny'
            });

            $scope.locationWeather = locationWeather;
        }]);

})(angular);
