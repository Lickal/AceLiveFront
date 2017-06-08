
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('InscriptionCtrl', InscriptionCtrl);

  /** @ngInject */
  function InscriptionCtrl($scope, $http, $timeout, $element) {
    this.test = true;
    $scope.newsletters = [
      {
        id: 1,
        name: "Newsletter d'inscription à la ferme des petits enfants géniaux",
        checked: false
      },{
        id: 2,
        name: "Newsletter 2",
        checked: true
      },{
        id: 3,
        name: "Newsletter 3",
        checked: true
      },{
        id: 4,
        name: "Newsletter 4",
        checked: true
      },{
        id: 5,
        name: "Newsletter 5",
        checked: true
      }
    ];


    $scope.inscrire = function () {
      // TODO
      if (inscriptionForm.input01.validity.valid && inscriptionForm.input02.validity.valid && inscriptionForm.input03.validity.valid) {
        console.log("Test");
      }
    };
  }
})();
