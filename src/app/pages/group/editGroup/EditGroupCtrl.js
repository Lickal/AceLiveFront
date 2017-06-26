(function () {
    'use strict';

    angular.module('BlurAdmin.pages.group')
        .controller('EditGroupCtrl', EditGroupCtrl);

    /** @ngInject */
    function EditGroupCtrl($scope, $http, $timeout, $element, $state, $stateParams, webService) {

      $scope.groupName = $stateParams.item.groupName;

        $scope.list_mail = function () {

            $.ajax({
                url: webService.URLserveur + 'users',
                type: 'GET',
                async: false,
                dataType: 'json',
                success: function (data, statut) {
                    $scope.standardSelectItems = data;
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };

        $scope.list_mail();

      $scope.modif = function () {
        var data = {};
          data.groupId = $stateParams.item.groupId;
          data.groupName = document.getElementById("name_group").value;
          $.ajax({
              url: webService.URLserveur + 'mailinggroup/' + $stateParams.item.groupId,
              type: 'PUT',
              contentType: "application/json",
              data: JSON.stringify(data),
              async: false,
              success: function (data, statut) {
                $state.go("group.listGroup");
              },
              error: function (resultat, statut, erreur) {
                  console.log("Oups, nous avons constaté l'erreur : " + erreur);
              }
          });

      }
    }
})();
