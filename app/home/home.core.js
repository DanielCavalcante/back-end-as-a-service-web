(function() {
    'use strict';
  
    angular.module('baas-front-end').config(config);
  
    function config($stateProvider) {
  
      var homeState = {
        name: 'app.home',
        url: '/home',
        templateUrl: '/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      }
  
      $stateProvider.state(homeState);
    }
  })();
  