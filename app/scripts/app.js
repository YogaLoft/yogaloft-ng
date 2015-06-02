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
    'ngTouch',
    'ui.calendar',
    'facebook'
  ])

  .constant('config', {
    'facebookAppId': '1434342883499221'
  })

  .config(function (FacebookProvider) {
    //FacebookProvider.init(config.facebookAppId);
    FacebookProvider.init('1434342883499221');
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activeRoute: 'home'
      })
      .when('/timetable', {
        templateUrl: 'views/timetable.html',
        controller: 'TimetableCtrl',
        activeRoute: 'timetable'
      })
      .when('/workshops', {
        templateUrl: 'views/workshops.html',
        controller: 'WorkshopsCtrl',
        activeRoute: 'workshops'
      })
      .when('/yoga', {
        templateUrl: 'views/yoga.html',
        controller: 'YogaCtrl',
        activeRoute: 'yoga'
      })
      .when('/teachers', {
        templateUrl: 'views/teachers.html',
        controller: 'TeachersCtrl',
        activeRoute: 'teachers'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        activeRoute: 'gallery'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        activeRoute: 'map'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
