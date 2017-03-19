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
      //return $http.get('https://crossorigin.me/http://yogaloft.tulasoftware.com/calendar/feed.ics').then(
      return $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/timetable.ics').then(
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
    this.index = function() {
      return $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/classes/index.json?' + Math.random()).then(
        function (response) {
          return (response.data);
        },
        function (error) {
          throw error.status + " : " + error.data;
        }
      );
    };
    this.faq = function() {
      return $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/faq/index.json?' + Math.random()).then(
        function (response) {
          return (response.data);
        },
        function (error) {
          throw error.status + " : " + error.data;
        }
      );
    };
    this.teachers = function() {
      return $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/teachers/index.json?' + Math.random()).then(
        function (response) {
          return (response.data);
        },
        function (error) {
          throw error.status + " : " + error.data;
        }
      );
    };
    this.banner = function() {
      return $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/banner.json?' + Math.random()).then(
        function (response) {
          var now = new Date();
          return ({
            notes: response.data.notes
              .filter(function (item) {
                return new Date(item.from) < now && new Date(item.to) > now;
              })
              .map(function (item) {
                return item.message;
              }),
            warnings: response.data.warnings
              .filter(function (item) {
                return new Date(item.from) < now && new Date(item.to) > now;
              })
              .map(function (item) {
                return item.message;
              }),
            alerts: response.data.alerts
              .filter(function (item) {
                return new Date(item.from) < now && new Date(item.to) > now;
              })
              .map(function (item) {
                return item.message;
              })
          });
        },
        function (error) {
          throw error.status + " : " + error.data;
        }
      );
    };
    this.workshops = function() {
      return $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/workshops/index.json?' + Math.random()).then(
        function (response) {
          return (response.data);
        },
        function (error) {
          throw error.status + " : " + error.data;
        }
      );
    };
  });
/*
angular.module('ylngApp')
  .factory('classes', ['$http', function ($http) {
    return {
      query: function () {
        return $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/classes/index.json');
      }
    };
  }]);
  */
