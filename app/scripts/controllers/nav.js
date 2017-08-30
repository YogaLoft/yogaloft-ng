'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('NavCtrl', function ($scope, $location, classCalendar) {
    
    $scope.isActive = function (loc) {
      return (($location.path() === '/' && loc === '/') || ($location.path() !== '/' && loc !== '/' && $location.path().startsWith(loc)));
    };
    classCalendar.index().then(
      function (ci) {
        $scope.ci = ci;
      },
      function (error) {
        console.log(error.statusText);
      }
    );
  });
