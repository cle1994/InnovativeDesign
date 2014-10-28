app.directive('scroll', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            angular.element($window).bind('scroll', function() {
                console.log('hello');
                if (this.pageYOffset >= 50) {
                    scope.changeScroll = true;
                } else {
                    scope.changeScroll = false;
                }

                scope.$apply();
            });
        }
    };
}]);
