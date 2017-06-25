(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('EditNewsletterCtrl', EditNewsletterCtrl);

    /** @ngInject */
    function EditNewsletterCtrl($scope, $http, $timeout, $element, $state, $stateParams, webService) {

      $scope.newsletterDescription = $stateParams.item.newsletterDescription;
      $scope.newsletterTitle = $stateParams.item.newsletterTitle;
      $scope.newsletterPJ = $stateParams.item.newsletterPJ;

      $scope.modif = function () {
        var data = {};
          data.newsletterDescription = $scope.newsletterDescription;
          data.newsletterTitle = $scope.newsletterTitle;
          data.newsletterPJ = $scope.newsletterPJ;
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
