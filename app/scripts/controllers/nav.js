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
    $scope.instructors = [
      'Charlotte-Levy',
      'Gavin-Tilstone',
      'Georgie-Crickmere',
      'Jo-Thyssen',
      'Jules-Laville',
      'Lee-Miller',
      'Nic-Sharpe',
      'Peter-Hughes',
      'Venita-Botha'
    ];
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
