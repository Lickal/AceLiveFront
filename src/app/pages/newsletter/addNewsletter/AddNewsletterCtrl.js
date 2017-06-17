(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('AddNewsletterCtrl', AddMailCtrl);

  /** @ngInject */
  function AddMailCtrl($scope, $http, $timeout, $element) {

    $scope.createNewsletter = function () {
      // TODO
      console.log("Etape 3");
    };
  }
})();
