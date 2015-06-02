'use strict';

/**
 * @ngdoc function
 * @name yogaloftNgApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the yogaloftNgApp
 */
angular.module('yogaloftNgApp')
  .controller('AuthCtrl', function ($scope, Facebook) {
    $scope.login = function() {
      // From now on you can use the Facebook service just as Facebook api says
      Facebook.login(function(response) {
        // Do something with response.
      });
    };
    $scope.getLoginStatus = function() {
      Facebook.getLoginStatus(function(response) {
        if(response.status === 'connected') {
          $scope.loggedIn = true;
        } else {
          $scope.loggedIn = false;
        }
      });
    };
    $scope.me = function() {
      Facebook.api('/me', function(response) {
        $scope.user = response;
      });
    };
    $scope.$watch(
      function() {
        return Facebook.isReady();
      },
      function(isReady) {
        $scope.facebookReady = isReady;
      }
    );
  });
