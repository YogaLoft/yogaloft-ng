'use strict';

/**
 * @ngdoc function
 * @name ylngApp.controller:FaqCtrl
 * @description
 * # FaqCtrl
 * Controller of the ylngApp
 */
angular.module('ylngApp')
  .controller('FaqCtrl', function ($scope, classCalendar) {
    classCalendar.faq().then(
      function (faq) {
        $scope.faq = faq;
      },
      function (error) {
        console.log(error.statusText);
      }
    );
  });
