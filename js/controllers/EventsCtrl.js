app.controller('EventsController', ['$scope', 'Facebook', function($scope, Facebook) {
    var randomNum = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var getCover = function(eventid) {
        $scope.fbCovers = [];

        Facebook.api(eventid + '?access_token=CAAUzUVdRbZAcBACFfGkQ4NgbywC4gW5KZAlWuggoKz1emZCRsTaaCkRaw2TLkFvrtwiGLr8PTkj2ZAy16bhmhVn440HlODvcp2ZABbuZC8ZBZCCB44Rtvhm7JlTYc0nOk1XXrnldCP3CIeY2UIdv4VPkWpKFCbPovQUZCkXFKa6Po4hoPAKUHShIWtZB7YHJ5VPXRXYSMYldZB3q2E75eGH3pXx&fields=cover', function(response) {
            var cover = '';

            if (response.cover) {
                cover = response.cover.source;
            } else {
                cover = './img/icon/innovative-' + randomNum(1, 4) + '.png';
            }

            $scope.fbCovers.push(cover);
        });
    };

    Facebook.api('/118333034872164/events?access_token=CAAUzUVdRbZAcBACFfGkQ4NgbywC4gW5KZAlWuggoKz1emZCRsTaaCkRaw2TLkFvrtwiGLr8PTkj2ZAy16bhmhVn440HlODvcp2ZABbuZC8ZBZCCB44Rtvhm7JlTYc0nOk1XXrnldCP3CIeY2UIdv4VPkWpKFCbPovQUZCkXFKa6Po4hoPAKUHShIWtZB7YHJ5VPXRXYSMYldZB3q2E75eGH3pXx', function(response) {
        for (var i = 0; i < response.data.length; i += 1) {
            getCover(response.data[i].id);
        }

        $scope.fbEvents = response.data;
        $scope.$apply();
    });
}]);
