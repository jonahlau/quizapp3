'use strict';

/**
 * @ngdoc function
 * @name quizappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quizappApp
 */
angular.module('quizApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
