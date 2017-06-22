(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campagne')
        .controller('EditCampagneCtrl', EditCampagneCtrl);

    /** @ngInject */
    function EditCampagneCtrl($scope, $http, $timeout, $element, webService, $stateParams) {


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
    }
})();
