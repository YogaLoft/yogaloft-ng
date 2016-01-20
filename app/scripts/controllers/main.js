'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('MainCtrl', function ($scope, $http, ical) {
    $http.get('http://cors.io/?u=http://yogaloft.tulasoftware.com/calendar/feed.ics').then(function(res) {
      var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var vcalendar = new ical.Component(ical.parse(res.data));
      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      var limit = new Date();
      limit.setDate(limit.getDate() + 4);
      var upcomingClasses = [];
      vcalendar.getAllSubcomponents('vevent').forEach(function(vevent) {
        var dtstart = vevent.getFirstPropertyValue('dtstart');
        var start = new Date(dtstart.year, dtstart.month - 1, dtstart.day, dtstart.hour, dtstart.minute);
        if (start < limit && start > yesterday) {
          var dtend = vevent.getFirstPropertyValue('dtend');
          var summary = vevent.getFirstPropertyValue('summary').split(' - ');
          upcomingClasses.push({
            sort: start,
            day: weekdays[start.getDay()],
            classUrl: '/classes/' + weekdays[start.getDay()] + '/' + summary[0].replace(/ /g, '-'),
            start: start.toTimeString().substring(0,5),
            end: (new Date(dtend.year, dtend.month - 1, dtend.day, dtend.hour, dtend.minute)).toTimeString().substring(0,5),
            class: summary[0],
            instructor: {
              name: summary[1],
              url: '/#/teachers/' + summary[1].replace(/ /g, '-'),
              image: 'https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/teachers/' + summary[1].replace(/ /g, '-') + '/128x128.png'
            },
            location: vevent.getFirstPropertyValue('location')
          });
        }
      });

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

      upcomingClasses.sort(function(a, b) {
        return a.sort - b.sort;
      })
      $scope.upcomingClasses = upcomingClasses;
    });
  });
