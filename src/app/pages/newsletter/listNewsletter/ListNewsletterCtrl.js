(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('ListNewsletterCtrl', ListNewsletterCtrl);

    /** @ngInject */
    function ListNewsletterCtrl($scope, $http, $timeout, $element, webService, $state) {

        $scope.smartTablePageSize = 10;


        $scope.listNewsletter = function () {

            $.ajax({
                url: webService.URLserveur + 'newsletter',
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

        $scope.listNewsletter();

        $scope.deleteNewsletter = function (id) {

            $.ajax({
                url: webService.URLserveur + 'newsletter/' + id,
                type: 'DELETE',
                dataType: 'json',
                async: false,
                success: function (data, statut) {
                    window.location.reload()
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };

        $scope.editNewsletter = function (item) {

            $state.go("newsletter.editNewsletter", {item: item});

        };
    }
})();
