'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:WorkshopsCtrl
 * @description
 * # WorkshopsCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('WorkshopsCtrl', function ($scope, $routeParams, $http, classCalendar) {
    $scope.workshopId = ($routeParams.workshop !== undefined) ? $routeParams.workshop : false;
    classCalendar.workshops().then(
      function (all) {
        if ($scope.workshopId) {
          var w = all.find(
            function(w){
              return w.id === $scope.workshopId;
            }
          );
          if (w.passes && w.passes.length) {
            $scope.passes = 'https://yogaloft.tulasoftware.com/external_form?';
            w.passes.forEach(function (pass) {
              $scope.passes += '&p[]=' + pass;
            });
          }
          $scope.workshop = w;
          $http.get('https://raw.githubusercontent.com/YogaLoft/yogaloft-content/master/workshops/' + $scope.workshopId + '.md').then(function(res) {
            $scope.markdown = res.data;
          });
        } else {
          $scope.workshops = all.filter(function(w){
            return new Date(w.display.from) < (new Date()) && new Date(w.display.to) > (new Date()); 
          });
        }
      },
      function (error) {
        console.log(error.statusText);
      }
    );
  });
