'use strict';

/**
 * @ngdoc function
 * @name quizappApp.controller:QuizcontrollerCtrl
 * @description
 * # QuizcontrollerCtrl
 * Controller of the quizappApp
 */
angular.module('quizApp')
/*******************
QUIZ CONTROLLER
*******************/
  .factory('Quiz', function($resource) {

  })

  .factory('serverQuizData', function($http) {
    return {
      getValue: function() {
        return $http.jsonp('http://localhost:3000/quizData?callback=JSON_CALLBACK');
      }
    };
  })

  .controller('QuizCtrl', function ($scope, quizService, scoreKeeperFactory, serverQuizData) {

    console.log(scoreKeeperFactory);
    $scope.quiz;
    $scope.sortBy = "quiz";

    serverQuizData.getValue()
      .success(function(data) {
        $scope.quiz= data;
        $scope.quiz = $scope.quiz.concat(quizService.getQuestions());
        console.log($scope.quiz);
      })
      .error(function(data, status, headers, config) {
        console.log("Error:", data, status, headers);
      });

    $scope.allAnswered = false;
    $scope.score = 0;
    $scope.questionsAnswered = 0;

    $scope.checkAnswer = function(question, value) {
      $scope.questionsAnswered++;
      if (question.answer == value) {
      scoreKeeperFactory.addScore();
      $scope.score = scoreKeeperFactory.getScore();
      }
      question.answered=true;
    };

    $scope.donewithQuiz = function() {
      return $scope.questionsAnswered ===$scope.quiz.length;
    };

    $scope.newQuestion = {options:[]};

    $scope.addOptionField = function() {
      $scope.newQuestion.options.push({value:''});
    };

    $scope.addNewQuestion = function() {
      $scope.newQuestion.difficulty = +$scope.newQuestion.difficulty;
      $scope.quiz.push($scope.newQuestion);
      quizService.addQuestion($scope.newQuestion);
      $scope.newQuestion = {};
    }

    // $scope.checkNumQuestions = function() {
    //   alert("CHECKING");
    //   return $scope.newQuestion.options.length>1;
    // }

    $scope.$watchCollection("newQuestion.options", function(newval, oldval) {
      // console.log(newval.length>1)
      $scope.qForm.$setValidity("question_length", newval.length>1);
      // console.log(newval);
      // console.log($scope.qForm.$error);
      // console.log($scope.qForm);
      // console.log($scope.qForm.$error.question_length);
      //   console.log($scope.qForm.$error);
      // console.log(newval.length);
    });
  })

/*******************
COUNTDOWN CONTROLLER
*******************/
  .controller("CountdownCtrl", function($scope, $interval) {
    $scope.time = 60;
    $scope.timesUp = false;
    $scope.timerIsRunning = true;
    var timer;

    $scope.countdown = function() {
      timer = $interval(function() {
        $scope.time--;
      }, 1000);
    };

    $scope.$watch('time', function(oldVal, newVal) {
      if (newVal ==1) {
        $scope.timerIsRunning = false;
        $scope.timesUp = true;
      }
    });

    $scope.start = function() {
      $scope.countdown();
    };

    $scope.pause = function() {
      $interval.cancel(timer);
    }

    $scope.restart = function() {
      $scope.timerIsRunning = false;
      $scope.time = 60;
      $scope.countdown();
    }

    $scope.countdown();
  });

