angular.module('MainCtrl', ['ngTouch']).controller('MainController', function($scope) {
  $scope.menuToggle = function() {
    $('#wrapper').toggleClass('toggled');
  }
});