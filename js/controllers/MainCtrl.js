app.controller('MainController', ['$scope', '$location', function($scope, $location) {
    $scope.sidebarShow = false;

    $scope.menuToggle = function() {
        $scope.sidebarShow = !$scope.sidebarShow;
    };

    $scope.sideClose = function() {
        $scope.sidebarShow = false;
    };
}]);
    