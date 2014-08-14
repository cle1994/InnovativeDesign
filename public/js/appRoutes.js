angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })

    .when('/about', {
      templateUrl: 'views/about.html'
    })

    .when('/contact', {
      templateUrl: 'views/contact.html'
    })

    .when('/request', {
      templateUrl: 'views/request.html'
    })

  $locationProvider.html5Mode(true);
}]);