'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('MainCtrl', function ($scope, classCalendar) {
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var limit = new Date();
    limit.setDate(limit.getDate() + 4);
    classCalendar.query().then(
      function (classes) {
        $scope.upcomingClasses = classes.filter(function(c){
          return c.start < limit && c.start > yesterday;
        }).map(function(c) {
          return {
            sort: c.start,
            day: weekdays[c.start.getDay()],
            start: c.start.toTimeString().substring(0,5),
            end: c.end.toTimeString().substring(0,5),
            class: {
              url: '/#/classes/' + weekdays[c.start.getDay()] + '/' + c.class.replace(/ /g, '-'),
              name: c.class
            },
            instructor: {
              name: c.instructor,
              url: '/#/teachers/' + c.instructor.replace(/ /g, '-'),
              image: 'https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/teachers/' + c.instructor.replace(/ /g, '-') + '/128x128.png'
            },
            location: c.location
          }
        });
        $scope.upcomingClasses.sort(function(a, b) {
          return a.sort - b.sort;
        });
      },
      function (error) {
        console.log(error.statusText);
      }
    );
    $scope.days = [];
    var day = new Date();
    for (var i=0; i < 3; i++) {
      if (i > 0) {
        day.setDate(day.getDate() + 1);
      }
      if (day.getDay() === 0) { // skip Sundays
        day.setDate(day.getDate()+1);
      }
      $scope.days.push(weekdays[day.getDay()]);
    }
  });
