(function() {
    'use strict';

    angular
        .module('baas-front-end')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$state', '$firebaseArray'];

    /* @ngInject */
    function AppCtrl($state, $firebaseArray) {
        var vm = this;
        var peopleRef = firebase.database().ref('people');
        var people = $firebaseArray(peopleRef);

        activate();

        function activate() {
            console.log(people);
        }
    } 
  })();
