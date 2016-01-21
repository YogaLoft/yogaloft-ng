'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.instructors = [
      'Charlotte-Levy',
      'Gavin-Tilstone',
      'Jo-Thyssen',
      'Jules-Laville',
      'Keef-Wesolowski-Miles',
      'Lee-Miller',
      'Marilina-De-Matteis',
      'Nic-Sharpe',
      'Peter-Hughes',
      'Venita-Botha'
    ];
    $scope.isActive = function (loc) {
      return (($location.path() === '/' && loc === '/') || ($location.path() !== '/' && loc !== '/' && $location.path().startsWith(loc)));
    };
  });
