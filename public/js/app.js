// Innovative Design
// by Christian Le
// http://christianle.com
// Github: cle1994 
// LinkedIn: http://www.linkedin.com/in/christianle94/

var innovativeDesign = angular.module('innovativeDesign', ['ngRoute', 'ngTouch']);

innovativeDesign.directive("scroll", function ($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if (this.pageYOffset >= 50) {
        scope.changeScroll = true;
      } else {
        scope.changeScroll = false;
      }
      scope.$apply();
    });
  };
});