(function () {
    'use strict';

    angular.module('BlurAdmin.pages.group')
        .controller('AddGroupCtrl', AddGroupCtrl);

    /** @ngInject */
    function AddGroupCtrl($scope, $http, $timeout, $element, webService) {

        var valueUsers = [];

        $scope.name_group = "";
        $scope.multipleSelectedItems = "";

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

        $scope.addGroup = function () {
          var data = {};
          data.groupName = $scope.groupName;
          $.ajax({
              url: webService.URLserveur + 'mailinggroup',
              type: 'POST',
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
            console.log($scope.name_group);
            console.log($scope.multipleSelectedItems);

        };
    }
})();
