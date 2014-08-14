angular.module('MainCtrl', ['ngTouch']).controller('MainController', function($scope) {
  $('.menu-toggle').on('click', function() {
    console.log('here');
    $('#wrapper').toggleClass('toggled');
  });
});