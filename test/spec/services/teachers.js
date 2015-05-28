'use strict';

describe('Service: teachers', function () {

  // load the service's module
  beforeEach(module('yogaloftNgApp'));

  // instantiate service
  var teachers;
  beforeEach(inject(function (_teachers_) {
    teachers = _teachers_;
  }));

  it('should do something', function () {
    expect(!!teachers).toBe(true);
  });

});
