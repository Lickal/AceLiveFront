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
                data: JSON.stringify(data_campagne),
                contentType: "application/json",
                success: function (data, statut) {
                  $.ajax({
                      url: webService.URLserveur + 'campaign',
                      type: 'GET',
                      async : false,
                      dataType: 'json',
                      success: function (data, statut) {
                          for (var i = 0; i < data.length; i++) {
                            if (data[i].campaignName == $scope.name_campaign) {
                              $scope.createNewsletterXCampaign(data[i], $scope.multipleSelectedItems);
                            }
                          }
                      },
                      error: function (resultat, statut, erreur) {
                          console.log("Oups, nous avons constaté l'erreur : " + erreur);
                      }

                  });
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }

            });
        };

        $scope.createNewsletterXCampaign = function (campaign, newsletter) {

          for (var i = 0; i < newsletter.length; i++) {

            $.ajax({
                url: webService.URLserveur + 'newsletter/' + newsletter[i],
                type: 'GET',
                dataType: 'json',
                success: function (data, statut) {
                  var data_newsletterxcampaign = {
                    "campaign": campaign,
                    "newsletter": {
                      "newsletterId": data.newsletterId,
                      "newsletterTitle": data.newsletterTitle
                    },
                    "newsletterxcampaignPK": {
                      "campaignId": campaign.campaignId,
                      "newsletterId": data.newsletterId
                    }
                  }

                    $.ajax({
                        url: webService.URLserveur + 'newsletterxcampaign',
                        type: 'POST',
                        data: JSON.stringify(data_newsletterxcampaign),
                        contentType: "application/json",
                        success: function (data, statut) {
                          console.log("Good");
                        },
                        error: function (resultat, statut, erreur) {
                            console.log("Oups, nous avons constaté l'erreur : " + erreur);
                        }

                    });
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }

            });
          }
        };
    }
})();
