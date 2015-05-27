'use strict';

describe('Controller: YogaCtrl', function () {

  // load the controller's module
  beforeEach(module('yogaloftNgApp'));

  var YogaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YogaCtrl = $controller('YogaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
