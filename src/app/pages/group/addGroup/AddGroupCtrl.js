(function () {
    'use strict';

    angular.module('BlurAdmin.pages.group')
        .controller('AddGroupCtrl', AddGroupCtrl);

    /** @ngInject */
    function AddGroupCtrl($scope, $http, $timeout, $element, webService) {
        this.test = true;

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
                    if (data.length) {
                        for (var i = 0; i < data.length; i++) {
                            valueUsers[i] = {};
                            valueUsers[i].label = data[i].userMail;
                            valueUsers[i].value = i + 1;
                        }
                    }
                    $scope.standardSelectItems = valueUsers;
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };

        $scope.list_mail();

        $scope.addGroup = function () {
            // TODO dans l'attente du add de campagne

            console.log($scope.name_group);
            console.log($scope.multipleSelectedItems);

        };
    }
})();
