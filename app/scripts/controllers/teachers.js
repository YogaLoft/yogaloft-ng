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
    classCalendar.teachers().then(
      function (teachers) {
        var teacher = teachers.find(function(t){
          return t.id === $routeParams.instructor;
        });
        $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/teachers/' + teacher.id + '/profile.md').then(function(res) {
          $scope.teacher = {
            id: teacher.id,
            name: teacher.name,
            markdown: res.data,
            image: {
              source: ('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/teachers/' + teacher.id + '/220x220.jpg'),
              alt: 'Profile photo of ' + teacher.name
            },
            facebook: (teacher.facebook) ? teacher.facebook : false
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
      },
      function (error) {
        console.log(error.statusText);
      }
    );
    $scope.$on('$viewContentLoaded', function() {
      if (typeof FB !== 'undefined') { FB = null; }
      (function(d, s, id) {
        var FB = null;
        var js, fjs = d.getElementsByTagName(s)[0];
        js = d.createElement(s);
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    });
  });
