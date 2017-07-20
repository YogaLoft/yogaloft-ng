'use strict';

/**
 * @ngdoc overview
 * @name ylngApp
 * @description
 * # ylngApp
 *
 * Main module of the application.
 */
angular
  .module('ylngApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngIcal',
    'hc.marked'
  ])
  .run(function($window) {
    $window.fbAsyncInit = function() {
      FB.init({
        appId: '1434342883499221',
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v2.5'
      });
    };
    (function(d, id) {
      var js, ref = d.getElementsByTagName('script')[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = '//connect.facebook.net/en_GB/sdk.js';
      ref.parentNode.insertBefore(js, ref);
    }(document, 'facebook-jssdk'));
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/teachers/:instructor', {
        templateUrl: 'views/teachers.html',
        controller: 'TeachersCtrl',
        controllerAs: 'teachers'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
