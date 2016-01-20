'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('TestCtrl', function ($scope, classCalendar) {
    classCalendar.query().then(
      function (result) {
        $scope.calendar = result;
      },
      function (error) {
        console.log(error.statusText);
      }
    );
  });
