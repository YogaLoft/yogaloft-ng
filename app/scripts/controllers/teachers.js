'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:TeachersCtrl
 * @description
 * # TeachersCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('TeachersCtrl', function ($scope, $routeParams, $http, classCalendar) {
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
    classCalendar.index().then(
      function (ci) {
        for (var weekday in ci) {
          if (ci.hasOwnProperty(weekday)) {
            ci[weekday] = ci[weekday].filter(
              function(c){
                return c.instructor.id === $routeParams.instructor;
              }
            );
          }
        }
        $scope.ci = ci;
      },
      function (error) {
        console.log(error.statusText);
      }
    );
  });
