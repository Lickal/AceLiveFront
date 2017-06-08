
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('AddMailCtrl', AddMailCtrl);

  /** @ngInject */
  function AddMailCtrl($scope, $http, $timeout, $element) {

    $scope.addMail = function () {
      // TODO
      console.log("Test");
    };
  }
})();
