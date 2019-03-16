(function () {
  'use strict';

  angular.module('baas-front-end').config(function ($stateProvider) {

      var homeState = {
        name: 'app.home',
        url: '/home',
        views: {
          mainContent: {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
          }
        }
      };
      
      $stateProvider.state(homeState);

    })
  })();
  