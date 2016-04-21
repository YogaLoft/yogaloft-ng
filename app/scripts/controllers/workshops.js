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
      function (index) {
        if ($scope.workshopId) {
          var w = index.find(
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
          $scope.workshops = index;
        }
      },
      function (error) {
        console.log(error.statusText);
      }
    );
  });
