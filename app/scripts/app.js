'use strict';

/**
 * @ngdoc overview
 * @name quizappApp
 * @description
 * # quizappApp
 *
 * Main module of the application.
 */
angular
  .module('quizApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'QuizCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
