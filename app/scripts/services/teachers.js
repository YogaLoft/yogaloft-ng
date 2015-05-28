'use strict';

/**
 * @ngdoc service
 * @name yogaloftNgApp.teachers
 * @description
 * # teachers
 * Factory in the yogaloftNgApp.
 */
angular.module('yogaloftNgApp')
  .factory('teachers', ['$http', function ($http) {
    return {
      get: function () {
        return $http.get('data/teachers.json');
      }
    };
  }]);
