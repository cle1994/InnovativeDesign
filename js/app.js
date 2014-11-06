var app = angular.module('innovativeDesign', ['ui.router', 'ngTouch', 'ngAnimate', 'facebook']);

app.run(['$rootScope', '$state', '$location', '$window', function ($rootScope, $state, $location, $window) {
    $rootScope.$state = $state;
    $rootScope.$on('$viewContentLoaded',function(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
}]);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", 'FacebookProvider', function($stateProvider, $urlRouterProvider, $locationProvider, FacebookProvider) {
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
        .state('event', {
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

    FacebookProvider.init('1463799333875095');
}]);
