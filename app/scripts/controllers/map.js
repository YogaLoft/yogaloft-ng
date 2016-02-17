'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('MapCtrl', function ($scope, $http) {
    $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/directions.md').then(function(res) {
      $scope.markdown = res.data;
    });
  });
