'use strict';

describe('Controller: CountdownCtrl', function () {

  // load the controller's module
  beforeEach(module('quizappApp'));

  var CountdownCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CountdownCtrl = $controller('CountdownCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
