'use strict';

/**
 * @ngdoc service
 * @name quizappApp.scoreKeeper
 * @description
 * # scoreKeeper
 * Value in the quizappApp.
 */
angular.module('quizApp')
  .factory('scoreKeeperFactory', function(scoreChange) {
    function ScoreKeeper() {
      var score = 0;
      this.addScore = function() {
        score = score + scoreChange.scoreIncrement;
      };
      this.getScore = function() {
        return score;
      };
    };

    return new ScoreKeeper();
  });

