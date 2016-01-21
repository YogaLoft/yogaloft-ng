'use strict';

/**
 * @ngdoc service
 * @name ylngApp.classCalendar
 * @description
 * # classCalendar
 * Factory in the ylngApp.
 */
angular.module('ylngApp')
  .service('classCalendar', function ($http, ical) {
    this.query = function () {
      //return $http.get('http://cors.io/?u=http://yogaloft.tulasoftware.com/calendar/feed.ics').then(
      return $http.get('https://crossorigin.me/http://yogaloft.tulasoftware.com/calendar/feed.ics').then(
        function (response) {
          return (new ical.Component(ical.parse(response.data))).getAllSubcomponents('vevent').map(function(vevent) {
            var dtstart = vevent.getFirstPropertyValue('dtstart');
            var dtend = vevent.getFirstPropertyValue('dtend');
            var summary = vevent.getFirstPropertyValue('summary').split(' - ');
            return {
              start: new Date(dtstart.year, dtstart.month - 1, dtstart.day, dtstart.hour, dtstart.minute),
              end: new Date(dtstart.year, dtend.month - 1, dtend.day, dtend.hour, dtend.minute),
              class: summary[0],
              instructor: summary[1],
              location: vevent.getFirstPropertyValue('location')
            };
          });
        }, function (error) {
          throw error.status + " : " + error.data;
        }
      );
    };
  });