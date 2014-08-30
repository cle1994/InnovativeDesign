// Innovative Design
// by Christian Le
// http://christianle.com
// Github: cle1994 
// LinkedIn: http://www.linkedin.com/in/christianle94/

innovativeDesign.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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

    .when('/events', {
      templateUrl: 'views/events.html'
    })

    .when('/request', {
      templateUrl: 'views/request.html'
    })

    .otherwise({
      redirectTo: '/'
    })

  $locationProvider.html5Mode(true);
}]);