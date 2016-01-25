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
  .run(function() {
    // load the Facebook javascript SDK
    (function(d){
      var js, 
      id = 'facebook-jssdk', 
      ref = d.getElementsByTagName('script')[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement('script'); 
      js.id = id; 
      js.async = true;
      js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";
      ref.parentNode.insertBefore(js, ref);
    }(document));
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/teachers/:instructor', {
        templateUrl: 'views/teachers.html',
        controller: 'TeachersCtrl',
        controllerAs: 'teachers'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .when('/timetable', {
        templateUrl: 'views/timetable.html',
        controller: 'TimetableCtrl',
        controllerAs: 'timetable'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'account'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .when('/classes/:weekday/:class', {
        templateUrl: 'views/classes.html',
        controller: 'ClassesCtrl',
        controllerAs: 'classes'
      })
      .when('/prices', {
        templateUrl: 'views/prices.html',
        controller: 'PricesCtrl',
        controllerAs: 'prices'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
