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
    'ngResource',
    'ngRoute',
    'angularLocalStorage'
  ])

  .config(function ($routeProvider, $locationProvider) {
    $locationProvider
      .hashPrefix('/#!')
      .html5Mode(true);

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
