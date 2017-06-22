(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campagne')
        .controller('AddCampagneCtrl', AddCampagneCtrl);

    /** @ngInject */
    function AddCampagneCtrl($scope, $http, $timeout, $element, webService) {

        var valueNews = [];

        $scope.standardSelectItems = [];
        $scope.multipleSelectedItems = [];
        $scope.name_campaign = "";
        $scope.description_campaign = "";

        $scope.list_newsletter = function () {

            $.ajax({
                url: webService.URLserveur + 'newsletter',
                type: 'GET',
                async: false,
                dataType: 'json',
                success: function (data, statut) {
                    if (data.length) {
                        for (var i = 0; i < data.length; i++) {
                            valueNews[i] = {};
                            valueNews[i].label = data[i].newsletterTitle;
                            valueNews[i].value = data[i].newsletterId;
                        }
                    }
                    $scope.standardSelectItems = valueNews;
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };

        $scope.list_newsletter();


        //Récupération des valeurs du form

        $scope.create = function () {

            // TODO il faut récupérer les valeurs du form pour les mettre dans ce WS
            var data_campagne = {};

            var e = document.getElementById("newsletter");
            $scope.multipleSelectedItems = [];
            for (var i = 0; i < e.options.length; i++) {
              if (e.options[i].selected) {
                $scope.multipleSelectedItems[$scope.multipleSelectedItems.length] = e.options[i].value;
              }
            }

            data_campagne.campaignName = $scope.name_campaign;
            console.log($scope.name_campaign);
            data_campagne.campaignDescription = $scope.description_campaign;

            $.ajax({
                url: webService.URLserveur + 'campaign',
                type: 'POST',
                data: data_campagne,
                async : false,
                dataType: 'json',
                success: function (data, statut) { // success est toujours en place, bien sûr !
                    console.log(data);
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }

            });
        };
    }
})();
