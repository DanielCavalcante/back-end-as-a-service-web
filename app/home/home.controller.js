(function() {
    'use strict';
    
    angular.module('baas-front-end')
    .controller('HomeCtrl', HomeCtrl);
  
    HomeCtrl.$inject = ['$firebaseArray'];
  
    /* @ngInject */
    function HomeCtrl($firebaseArray) {
      var vm = this;
      var peopleRef = firebase.database().ref('people');
      var people = $firebaseArray(peopleRef);

      activate();

      function activate() {
        vm.people = people;
        console.log(vm.people);
        console.log('teste');
        
      }
  
    }
  })();
  