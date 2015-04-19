(function(angular) {

    angular.module('weatherModule')

        .factory('LocationWeather', function() {
            var LocationWeather = function(data) {
                var self = this;

                self.location = data.location;
                self.conditions = data.conditions;
            }

            return LocationWeather;
        })

})(angular);
