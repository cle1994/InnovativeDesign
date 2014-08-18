innovativeDesign.controller('MainController', function($scope) {
  $scope.menuToggle = function() {
    $('#wrapper').toggleClass('toggled');
  }
  $scope.menuClose = function() {
    $('#wrapper').removeClass('toggled');
  }
});