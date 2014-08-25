innovativeDesign.controller('MainController', function($scope) {
  $scope.menuToggle = function() {
    $('#wrapper').toggleClass('toggled');
    $('.hamburger').toggleClass('active');
  }
  $scope.menuClose = function() {
    $('#wrapper').removeClass('toggled');
    $('.hamburger').removeClass('active');
  }
});