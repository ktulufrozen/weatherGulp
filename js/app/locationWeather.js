(function(angular) {

    angular.module('weatherModule')

        .factory('LocationWeather', function() {
            class LocationWeather {
                constructor (data) {
                    "use strict";
                    this.location = data.location;
                    this.conditions = data.conditions;
                }
            }

            return LocationWeather;
        })

})(angular);
