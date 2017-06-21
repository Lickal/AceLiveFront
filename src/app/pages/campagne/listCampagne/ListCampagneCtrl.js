(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campagne')
        .controller('ListCampagneCtrl', ListCampagneCtrl);

    /** @ngInject */
    function ListCampagneCtrl($scope, $http, $timeout, $element, webService) {

        $scope.smartTablePageSize = 10;

        $scope.smartTableData = [];

        $scope.listCampagne = function () {

            $.ajax({
                url: webService.URLserveur + 'campaign',
                type: 'GET',
                dataType: 'json',
                async:false,
                success: function (data, statut) {
                    $scope.smartTableData=data;
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };

        $scope.listCampagne();

        $scope.deleteCampagne = function (id) {

            $.ajax({
                url: webService.URLserveur + 'campaign/'+id,
                type: 'DELETE',
                dataType: 'json',
                async:false,
                success: function (data, statut) {
                    console.log("Ok ;)");
                    window.location.reload()
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };

        $scope.editCampagne = function (id) {

            // TODO Campaign entity
            $.ajax({
                url: webService.URLserveur + 'campaign/'+id,
                type: 'PUT',
                dataType: 'json',
                async:false,
                success: function (data, statut) {
                    console.log("Ok ;)");
                    document.location.href="editCampagne.html"
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };
    }
})();
