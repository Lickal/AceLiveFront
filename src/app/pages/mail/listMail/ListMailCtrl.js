(function () {
    'use strict';

    angular.module('BlurAdmin.pages.mail')
        .controller('ListMailCtrl', ListMailCtrl);

    /** @ngInject */
    function ListMailCtrl($scope, $http, $timeout, $element,  webService, $state) {

        $scope.smartTablePageSize = 10;

        $scope.smartTableData = [];

        $scope.list = function () {

            $.ajax({
                url: webService.URLserveur + 'users',
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

        $scope.list();

        $scope.delete = function (id) {

            $.ajax({
                url: webService.URLserveur + 'users/' + id,
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

        $scope.edit = function (mail) {

            $state.go("mail.editMail", {mail: mail});

        };
    }

})();
