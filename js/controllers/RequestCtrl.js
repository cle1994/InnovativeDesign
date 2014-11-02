app.controller('RequestController', ['$scope', '$state', '$stateParams', '$timeout', 'RequestService', function($scope, $state, $stateParams, $timeout, RequestService) {
    $scope.isError = false;
    $scope.response = null;
    $scope.typeSelected = false;
    $scope.typeTitle = 'Design';
    $scope.dateText = 'Proposed Deadline';
    $scope.submitted = false;
    $scope.done = false;
    $scope.response = 'We\'ve received your request! Look for an email from our VP of Design Services soon.';
    $scope.timer = 10;

    $scope.select = function(type) {
        $scope.typeSelected = true;
        $scope.typeTitle = type;

        if (type === 'Photography' || type === 'Videography') {
            $scope.dateText = 'Proposed Shoot Date';
        }
    };

    $scope.timeRefresh = function() {
        $scope.timer -= 1;

        if ($scope.timer === 0) {
            $scope.refresh();
        }

        $timeout($scope.timeRefresh, 1000);
    };

    $scope.refresh = function() {
        $state.transitionTo($state.current, $stateParams, { reload: true, inherit: false, notify: true });
    };

    $scope.send = function() {
        var newRequest = {
            service: $scope.typeTitle,
            organization: $scope.organization,
            campus: $scope.campus,
            contact: $scope.contact,
            number: $scope.number,
            email: $scope.email,
            orgInfo: $scope.orgInfo,
            addInfo: $scope.addInfo,
            date: $scope.date,
            time: $scope.time,
            sketch: $scope.sketch
        };

        $scope.submitted = true;

        RequestService.send(newRequest)
            .success(function(data) {
                $scope.isError = false;
                $scope.done = true;
                $scope.timeRefresh();
            })
            .error(function(data) {
                $scope.done = true;
                console.log('Error: ' + data);
                $scope.isError = true;
                $scope.response = 'We\'re sorry but there was a problem the request. Please try again!';
                $scope.timeRefresh();
            });
    };
}]);
