'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:TeachersCtrl
 * @description
 * # TeachersCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('TeachersCtrl', function ($scope, $routeParams, $http) {
    $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/teachers/' + $routeParams.instructor + '/profile.md').then(function(res) {
      $scope.teacher = {
        id: $routeParams.instructor,
        name: $routeParams.instructor.replace(/-/g, ' '),
        markdown: res.data,
        image: {
          source: ('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/teachers/' + $routeParams.instructor + '/220x220.jpg'),
          alt: 'Profile photo of ' + $routeParams.instructor.replace(/-/g, ' ')
        }
      };
    });
  });
