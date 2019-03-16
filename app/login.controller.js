(function() {
    'use strict';

    angular
        .module('baas-front-end')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$state', '$firebaseArray'];

    /* @ngInject */
    function LoginCtrl($state, $firebaseArray) {
        var vm = this;
        // var peopleRef = firebase.database().ref('people');
        // var people = $firebaseArray(peopleRef);

        activate();

        function activate() {
        }
    } 
  })();
