
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('AddGroupCtrl', AddGroupCtrl);

  /** @ngInject */
  function AddGroupCtrl($scope, $http, $timeout, $element) {
    this.test = true;
    $scope.participants = [
      {
        id: 1,
        name: "Patrick",
        checked: false
      },{
        id: 2,
        name: "René",
        checked: true
      },{
        id: 3,
        name: "Girard",
        checked: true
      },{
        id: 4,
        name: "André",
        checked: true
      },{
        id: 5,
        name: "Eugène",
        checked: true
      },{
        id: 6,
        name: "Francis",
        checked: false
      }
    ];


    $scope.inscrire = function () {
      // TODO
      if (addGroupForm.group01.validity.valid) {
        console.log("Test");
      }
    };
  }
})();
