'use strict';

describe('Service: scoreKeeper', function () {

  // load the service's module
  beforeEach(module('quizappApp'));

  // instantiate service
  var scoreKeeper;
  beforeEach(inject(function (_scoreKeeper_) {
    scoreKeeper = _scoreKeeper_;
  }));

  it('should do something', function () {
    expect(!!scoreKeeper).toBe(true);
  });

});
