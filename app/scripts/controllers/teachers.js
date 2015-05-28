'use strict';

/**
 * @ngdoc function
 * @name yogaloftNgApp.controller:TeachersCtrl
 * @description
 * # TeachersCtrl
 * Controller of the yogaloftNgApp
 */



angular.module('yogaloftNgApp')
  .controller('TeachersCtrl', function ($scope, teachers) {
    $scope.teachers = [];
    teachers.get().success(function(list) {
      list = shuffle(list);
      list.forEach(function(teacher){
        if(teacher.isActive){
          $scope.teachers.push(teacher);
        }
      });
    });
  });

function shuffle(array) {
  var counter = array.length, temp, index;
  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
