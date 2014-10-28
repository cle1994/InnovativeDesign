app.directive('changeTitle', ['$rootScope', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            var listener = function(event, state, params, oldState, oldParams) {
                var title = 'Innovative Design';
                if (state.data && state.data.pageTitle) {
                    title = state.data.pageTitle;
                }
                element.text(title);
            };

            $rootScope.$on('stateChangeStart', listener);
        }
    };
}]);