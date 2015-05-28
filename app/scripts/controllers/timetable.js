'use strict';

/**
 * @ngdoc function
 * @name yogaloftNgApp.controller:TimetableCtrl
 * @description
 * # TimetableCtrl
 * Controller of the yogaloftNgApp
 */
angular.module('yogaloftNgApp')
  .controller('TimetableCtrl', function ($scope, teachers) {
    $scope.yogaClasses = [];
    teachers.get().success(function(list) {
      list.forEach(function(teacher){
        if(teacher.isActive && teacher.calendar.id){
          $scope.yogaClasses.push({
            googleCalendarApiKey: 'AIzaSyCeAGdj8W-qzi8nq_3C3zwgzU0FVC6Lyho',
            googleCalendarId: teacher.calendar.id,
            textColor: teacher.calendar.textColor,
            className: 'calendar-event'
          });
        }
      });
    });
    $scope.calendar = {
      defaultView: 'agendaWeek',
      hiddenDays: [ 0 ],
      businessHours: {
        start: '08:30',
        end: '21:30',
        dow: [ 1, 2, 3, 4, 5, 6 ]
      },
      header: {
        left: 'month agendaWeek basicDay',
        center: 'title',
        right: 'today prev,next'
      }
    };
  });
