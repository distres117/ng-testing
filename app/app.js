angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  //$urlRouterProvider.when('/', '/home');
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home',{url: '/'})
    .state('link', {url: '/link/:idx'});
});
