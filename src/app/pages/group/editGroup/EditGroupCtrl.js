(function () {
    'use strict';

    angular.module('BlurAdmin.pages.group')
        .controller('EditGroupCtrl', EditGroupCtrl);

    /** @ngInject */
    function EditGroupCtrl($scope, $http, $timeout, $element, $state, $stateParams, webService) {

      $scope.groupName = $stateParams.item.groupName;

      $scope.modif = function () {
        var data = {};
          data.groupName = $scope.groupName;
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
