'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:TimetableCtrl
 * @description
 * # TimetableCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('TimetableCtrl', function ($scope, classCalendar) {
    classCalendar.banner().then(function(banner){
      $scope.banner = banner;
    });
  });
