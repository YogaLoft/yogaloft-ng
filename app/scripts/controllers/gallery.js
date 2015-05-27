'use strict';

/**
 * @ngdoc function
 * @name yogaloftNgApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the yogaloftNgApp
 */
angular.module('yogaloftNgApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
