'use strict';

/**
 * @ngdoc overview
 * @name yogaloftNgApp
 * @description
 * # yogaloftNgApp
 *
 * Main module of the application.
 */
angular
  .module('yogaloftNgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/timetable', {
        templateUrl: 'views/timetable.html',
        controller: 'TimetableCtrl'
      })
      .when('/workshops', {
        templateUrl: 'views/workshops.html',
        controller: 'WorkshopsCtrl'
      })
      .when('/yoga', {
        templateUrl: 'views/yoga.html',
        controller: 'YogaCtrl'
      })
      .when('/teachers', {
        templateUrl: 'views/teachers.html',
        controller: 'TeachersCtrl'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
