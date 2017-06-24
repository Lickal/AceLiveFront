(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campagne')
        .controller('EditCampagneCtrl', EditCampagneCtrl);

    /** @ngInject */
    function EditCampagneCtrl($scope, $http, $timeout, $element, webService, $stateParams, $state) {


        $scope.detail_campagne = function () {
            console.log($stateParams.id);
            $.ajax({
                url: webService.URLserveur + 'campaign/' + $stateParams.id,
                type: 'GET',
                dataType: 'json',
                async: false,
                success: function (data, statut) {
                    $scope.description_campaign = data.campaignDescription;
                    $scope.name_campaign = data.campaignName;

                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });

        }

        $scope.detail_campagne();



        $scope.modif = function () {
          var data = {};
            data.campaignDescription = $scope.description_campaign;
            data.campaignId = $stateParams.id;
            data.campaignName = $scope.name_campaign;
            $.ajax({
                url: webService.URLserveur + 'campaign/' + $stateParams.id,
                type: 'PUT',
                contentType: "application/json",
                data: JSON.stringify(data),
                async: false,
                success: function (data, statut) {
                  $state.go("campagne.listCampagne");
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });

        }
    }
})();
