(function () {
    'use strict';

    angular.module('BlurAdmin.pages.mail')
        .controller('EditMailCtrl', EditMailCtrl);

    /** @ngInject */
    function EditMailCtrl($scope, $http, $timeout, $element, $state, $stateParams) {

      $scope.nom_mail = $stateParams.mail.lastName;
      $scope.prenom_mail = $stateParams.mail.firstName;
      $scope.age_mail = $stateParams.mail.age;
      $scope.mail_mail = $stateParams.mail.username;

        $scope.edit = function () {
        };
    }
})();
