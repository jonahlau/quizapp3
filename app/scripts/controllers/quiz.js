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

  .controller('QuizCtrl', function ($scope) {
    $scope.quiz = [
    {
      "q": "Who is the best ping pong player at FSA?",
      'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value': "Nimit"} , { 'value': "Patrick"}],
      'answer': "Nimit",
      'difficulty': 2
    },
    { "q": "Which robot name was chanted during Lego Mindstorms?",
      'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}],
      'answer':'noHope.js',
      'difficulty': 1
    },
    {
      'q': "Out of the following frontend frameworks, which framework is most rails-like",
      'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value': 'Backbone.js'} , { 'value': 'Meteor.js'}],
      'answer':'Ember.js',
      'difficulty': 3
    },
    {
      'q': "Which project used a local data store?",
      'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value': 'WikiWalker'} , { 'value': 'WikiStack'}],
      'answer':'Twitter.js',
      'difficulty':4
    }];

  $scope.allAnswered = false;
  $scope.score = 0;
  $scope.questionsAnswered = 0;

  $scope.checkAnswer = function(question, value) {
    $scope.questionsAnswered++;
    if (question.answer == value) {
      $scope.score++;
      alert("yay");
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
    $scope.newQuestion = {};
  }

  // $scope.checkNumQuestions = function() {
  //   alert("CHECKING");
  //   return $scope.newQuestion.options.length>1;
  // }

  $scope.$watchCollection("newQuestion.options", function(newval, oldval) {
    // console.log(newval.length>1)
    debugger;
    $scope.qForm.$setValidity("question_length", newval.length>1);
    // console.log(newval);
    // console.log($scope.qForm.$error);
    console.log($scope.qForm);
    console.log($scope.qForm.$error.question_length);
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
