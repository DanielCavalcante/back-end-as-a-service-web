(function() {
    'use strict';
    
    angular.module('baas-front-end.person')
    .controller('PersonCtrl', PersonCtrl);
  
    PersonCtrl.$inject = ['$firebaseArray'];
  
    /* @ngInject */
    function PersonCtrl($firebaseArray) {
      var vm = this;
      var peopleRef = firebase.database().ref('people');
      var people = $firebaseArray(peopleRef);

      activate();

      function activate() {
        vm.people = people;
      }
  
    }
  })();
  