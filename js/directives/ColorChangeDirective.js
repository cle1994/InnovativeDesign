app.directive('color', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            var half = window.screen.availHeight / 2;

            angular.element($window).bind('scroll', function() {
                var scrollY = window.pageYOffset;

                var fillNodes = element[0].children;
                var index = {
                    'gold': fillNodes[2].getBoundingClientRect().top + scrollY - half,
                    'photo': fillNodes[3].getBoundingClientRect().top + scrollY - half,
                    'web': fillNodes[4].getBoundingClientRect().top + scrollY - half,
                    'vid': fillNodes[5].getBoundingClientRect().top + scrollY - half,
                    'mark': fillNodes[6].getBoundingClientRect().top + scrollY - half
                };

                if (index.mark <= scrollY) {
                    scope.changeColor = 'black';
                } else if (index.vid <= scrollY) {
                    scope.changeColor = 'red';
                } else if (index.web <= scrollY) {
                    scope.changeColor = 'blue';
                } else if (index.photo <= scrollY) {
                    scope.changeColor = 'red';
                } else if (index.gold <= scrollY) {
                    scope.changeColor = 'gold';
                } else {
                    scope.changeColor = 'blue';
                }

                scope.$apply();
            });
        }
    };
}]);
