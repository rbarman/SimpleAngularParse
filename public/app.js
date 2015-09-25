var myApp = angular.module('myApp',['ngRoute']);
// Initialize Parse only once
Parse.initialize("Wm23Levy1L1nw1Pv05wWH8xoSOnKxiK8Ru1cu7Vo", "EXv7bOsmLn0fm9klZ8seRV4yQM6Eo1Jbjup61BSG");

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/',{
      templateUrl:'views/home.html',
      controller:'HomeCtrl',
      controllerAs:''
    }).
    otherwise({
      redirectTo:'/'
    });
}]);