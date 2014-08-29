// Innovative Design
// by Christian Le
// http://christianle.com
// Github: cle1994
// LinkedIn: http://www.linkedin.com/in/christianle94/

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