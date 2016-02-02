'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:ClassesCtrl
 * @description
 * # ClassesCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('ClassesCtrl', function ($scope, $routeParams, $http, classCalendar) {
    $scope.weekday = ($routeParams.weekday !== undefined) ? $routeParams.weekday : false;
    classCalendar.index().then(
      function (ci) {
        if ($scope.weekday) {
          var c = ci[$routeParams.weekday].find(
            function(c){
              return c.id === $routeParams.class;
            }
          );
          if (c.passes && c.passes.length) {
            $scope.passes = 'https://yogaloft.tulasoftware.com/external_form?';
            c.passes.forEach(function (pass) {
              $scope.passes += '&p[]=' + pass;
            });
          }
          $scope.class = c;
        } else {
        }
      },
      function (error) {
        console.log(error.statusText);
      }
    );
    if ($scope.weekday) {
      $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/classes/' + $scope.weekday + '/' + $routeParams.class + '.md').then(function(res) {
        $scope.markdown = res.data;
      });
    } else {
      $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/classes/' + $routeParams.class + '.md').then(function(res) {
        $scope.markdown = res.data;
      });
    }
  });
