(function () {
    'use strict';

    angular.module('BlurAdmin.pages.mail')
        .controller('EditMailCtrl', EditMailCtrl);

    /** @ngInject */
    function EditMailCtrl($scope, $http, $timeout, $element, $state, $stateParams, webService) {


        $scope.userAge = "";
        $scope.userMail = "";
        $scope.userName = "";

        $scope.detailUser = function () {

            $.ajax({
                url: webService.URLserveur + 'users/' + $stateParams.mail,
                type: 'GET',
                contentType: "application/json",
                async: false,
                success: function (data, statut) {
                    $scope.userAge = data.userAge;
                    $scope.userMail = data.userMail;
                    $scope.userName = data.userName;
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };

        $scope.detailUser();

        $scope.edit = function () {
            var data = {};
            data.userAge = $scope.userAge;
            data.userMail = $scope.userMail;
            data.userName = $scope.userName;
            $.ajax({
                url: webService.URLserveur + 'users/' + $stateParams.mail,
                type: 'PUT',
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
