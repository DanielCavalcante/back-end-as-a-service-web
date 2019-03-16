(function() {
    'use strict';
    
    angular.module('baas-front-end.home')
    .controller('HomeCtrl', HomeCtrl);
  
    HomeCtrl.$inject = ['$firebaseArray'];
  
    /* @ngInject */
    function HomeCtrl($firebaseArray) {
      var vm = this;
      // var peopleRef = firebase.database().ref('people');
      // var people = $firebaseArray(peopleRef);

      activate();

      function activate() {
        //vm.people = people;
        
      }
  
    }
  })();
  