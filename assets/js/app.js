var brewsr = angular.module('Brewsr', ['ui.bootstrap', 'ngRoute'])

brewsr.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
      templateUrl:'/views/home.html',
      controller:'HomeCtrl'
  })
}]);