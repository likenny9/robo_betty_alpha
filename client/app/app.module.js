'use strict';

angular.module('robobetty', ['ui.router',
  'widget',
  'product', 'dashboard','ngCookies','ui.bootstrap'])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/components/home/views/home.html'
      })
      .state('product', {
        url: '/product',
<<<<<<< HEAD
        templateUrl: 'views/components/product/views/product.html'
      })
      .state('dashboard',{
        url:'/dashboard',
        templateUrl: 'views/dashboard.html'
=======
>>>>>>> 71d15337b05dc21132f02f80536af5157e526b85
      });

  });

