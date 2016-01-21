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
    $scope.weekday = $routeParams.weekday;
    classCalendar.index().then(
      function (ci) {
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
      },
      function (error) {
        console.log(error.statusText);
      }
    );
    $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/classes/' + $routeParams.weekday + '/' + $routeParams.class + '.md').then(function(res) {
      $scope.markdown = res.data;
    });
  });
