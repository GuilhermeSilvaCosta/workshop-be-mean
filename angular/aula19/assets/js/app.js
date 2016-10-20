angular.module('BeMEAN', ['ngAnimate', 'ngRoute', 'User'])
    .config(config);

function config($routeProvider, $locationProvider){
    // $locationProvider.html5Mode(true);
    $routeProvider
        .when('/',{
            templateUrl: 'views/index.html',
        })
        .otherwise({
            redirectTo: '/'
        });
}    