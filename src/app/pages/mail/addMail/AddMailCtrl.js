
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mail')
      .controller('AddMailCtrl', AddMailCtrl);

  /** @ngInject */
  function AddMailCtrl($scope, $http, $timeout, $element, $state, $stateParams, webService) {

    $scope.import = function () {
      // TODO
      console.log("Etape 1");
    };

    $scope.add_mail = function () {

            var data = {};
            data.userAge = document.getElementById("userAge").value;
            data.userMail = document.getElementById("userMail").value;
            data.userName = document.getElementById("userName").value;

            $.ajax({
                url: webService.URLserveur + 'users',
                type: 'POST',
                contentType: "application/json",
                data: JSON.stringify(data),
                async: false,
                success: function (data, statut) {
                    $state.go("mail.listMail");
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
    };
  }
})();
