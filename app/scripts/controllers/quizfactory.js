'use strict';

angular.module('quizApp')
  .factory('quizService', function(storage) {

    function Quiz() {
      this.getQuestions = function() {
        return storage.get("questions") || [];
      };

      this.addQuestion = function(question) {
        var questions = storage.get("questions") || [];
        questions.push(question);
        storage.set("questions", questions);
      };
    };

    return new Quiz();
  });

