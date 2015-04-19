describe('weatherController tests', function() {

    beforeEach(module('weatherModule'));

    it('should have a weatherLocation on its scope', inject(function($rootScope, $controller){
        var scope = $rootScope.$new();

        var weatherController = $controller('weatherController', {$scope: scope});

        expect(scope.locationWeather).not.toBe(null);
    }));
});
