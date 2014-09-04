'use strict';

angular.module('quizApp')
  .provider('scoreChange', function() {
    var scoreToChange;
    return {
      setIncrement: function(inputVal) {
        scoreToChange = inputVal;
      },
      $get: function() {
        return {
          scoreIncrement: scoreToChange
        };
      }
    };
  })

  .config(function(scoreChangeProvider) {
    scoreChangeProvider.setIncrement(5);
  });

  //REMEMBER TO ASK WHY ADDING THIS CONFIG TO THE CONFIG ON APP.JS BREAKS IT.  ERROR WAS INJECTOR COULD NOT FIND SCORECHANGEPROVIDER.