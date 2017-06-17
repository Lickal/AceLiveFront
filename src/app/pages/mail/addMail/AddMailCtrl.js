
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mail')
      .controller('AddMailCtrl', AddMailCtrl);

  /** @ngInject */
  function AddMailCtrl($scope, $http, $timeout, $element) {

    $scope.import = function () {
      // TODO
      console.log("Etape 1");
    };

    $scope.add_mail = function () {
        // TODO
        console.log("Etape 2");
    };
  }
})();
