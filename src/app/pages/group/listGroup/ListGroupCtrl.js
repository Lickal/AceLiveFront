(function () {
    'use strict';

    angular.module('BlurAdmin.pages.group')
        .controller('ListGroupCtrl', ListGroupCtrl);

    /** @ngInject */
    function ListGroupCtrl($scope, $http, $timeout, $element, webService, $state) {

        $scope.smartTablePageSize = 10;

        $scope.smartTableData = [];

        $scope.listGroup = function () {

            $.ajax({
                url: webService.URLserveur + 'mailinggroup',
                type: 'GET',
                dataType: 'json',
                async: false,
                success: function (data, statut) {
                    $scope.smartTableData = data;
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };

        $scope.listGroup();

        $scope.deleteGroup = function (id) {

            $.ajax({
                url: webService.URLserveur + 'mailinggroup/' + id,
                type: 'DELETE',
                dataType: 'json',
                async: false,
                success: function (data, statut) {
                    console.log("Ok ;)");
                    window.location.reload()
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };

        $scope.editGroup = function (item) {

            $state.go("group.editGroup", {item: item});

        };
    }
})();
