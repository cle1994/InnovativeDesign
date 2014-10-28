var app = angular.module('innovativeDesign', ['ui.router', 'ngTouch', 'ngAnimate']);

app.run(['$rootScope', '$state', '$location', '$window', function ($rootScope, $state, $location, $window) {
    $rootScope.$state = $state;
}]);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html',
            data: {
                pageTitle: 'Innovative Design'
            }
        })
        .state('about', {
            url: '/about',
            templateUrl: './views/about.html',
            data: {
                pageTitle: 'About InnoD'
            }
        })
        .state('contact', {
            url: '/contact',
            templateUrl: './views/contact.html',
            data: {
                pageTitle: 'Contact InnoD'
            }
        })
        .state('events', {
            url: '/events',
            templateUrl: './views/events.html',
            data: {
                pageTitle: 'InnoD Events'
            }
        })
        .state('request', {
            url: '/request',
            templateUrl: './views/request.html',
            data: {
                pageTitle: 'Request InnoD'
            }
        });
}]);
