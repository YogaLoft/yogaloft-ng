'use strict';

describe('Service: classCalendar', function () {

  // load the service's module
  beforeEach(module('ylngApp'));

  // instantiate service
  var classCalendar;
  beforeEach(inject(function (_classCalendar_) {
    classCalendar = _classCalendar_;
  }));

  it('should do something', function () {
    expect(!!classCalendar).toBe(true);
  });

});
