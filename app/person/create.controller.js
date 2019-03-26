(function() {
  'use strict';
  
  angular.module('baas-front-end.person')
  .controller('CreatePersonCtrl', CreatePersonCtrl);

  CreatePersonCtrl.$inject = ['$firebaseArray'];

  /* @ngInject */
  function CreatePersonCtrl($firebaseArray) {
    var vm = this;
    // var peopleRef = firebase.database().ref('people');
    // var people = $firebaseArray(peopleRef);

    activate();

    function activate() {
      //vm.people = people;
      
    }

  }
})();
  