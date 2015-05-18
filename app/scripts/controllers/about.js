'use strict';

/**
 * @ngdoc function
 * @name yogaloftNgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yogaloftNgApp
 */
angular.module('yogaloftNgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
