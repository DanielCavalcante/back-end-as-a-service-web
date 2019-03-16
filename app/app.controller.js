(function() {
    'use strict';

    angular
        .module('baas-front-end')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$state'];

    /* @ngInject */
    function AppCtrl($state) {
        var vm = this;

        activate();

        function activate() {

        }
    } 
  })();
