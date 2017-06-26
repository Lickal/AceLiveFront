(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('EditNewsletterCtrl', EditNewsletterCtrl);

    /** @ngInject */
    function EditNewsletterCtrl($scope, $http, $timeout, $element, $state, $stateParams, webService) {

      $scope.newsletterDescription = $stateParams.item.newsletterDescription;
      $scope.newsletterTitle = $stateParams.item.newsletterTitle;


        $scope.listNewsletter = function () {

            $.ajax({
                url: webService.URLserveur + 'newsletter',
                type: 'GET',
                dataType: 'json',
                async: false,
                success: function (data, statut) {
                    console.log(data);
                    if (data.newsletterId == $stateParams.item.newsletterId) {
                        $scope.date_newsletter = data.newsletterDate;
                        $scope.newsletterPJ = data.newsletterPJ;

                    }
                },
                error: function (resultat, statut, erreur) {
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };

        $scope.listNewsletter();


        $scope.modif = function () {
        var data = {};
          data.newsletterId = $stateParams.item.newsletterId;
          data.newsletterDate = document.getElementById("date_newsletter").value;
          data.newsletterDescription = document.getElementById("newsletterDescription").value;
          data.newsletterTitle = document.getElementById("newsletterTitle").value;
          data.newsletterPJ = document.getElementById("newsletterPJ").value;
          $.ajax({
              url: webService.URLserveur + 'newsletter/' + $stateParams.item.newsletterId,
              type: 'PUT',
              contentType: "application/json",
              data: JSON.stringify(data),
              async: false,
              success: function (data, statut) {
                $state.go("newsletter.listNewsletter");
              },
              error: function (resultat, statut, erreur) {
                  console.log("Oups, nous avons constaté l'erreur : " + erreur);
              }
          });

      }
    }
})();
