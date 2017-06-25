
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('InscriptionNewsletterCtrl', InscriptionNewsletterCtrl);

  /** @ngInject */
  function InscriptionNewsletterCtrl($scope, $http, $timeout, $element, webService) {

    $scope.multipleSelectedItemsNewsletter;
    $scope.multipleSelectedItems;

    $scope.list_mail = function () {

        $.ajax({
            url: webService.URLserveur + 'users',
            type: 'GET',
            async: false,
            dataType: 'json',
            success: function (data, statut) {
                $scope.standardSelectItems = data;
            },
            error: function (resultat, statut, erreur) {
                console.log("Oups, nous avons constaté l'erreur : " + erreur);
            }
        });
    };

    $scope.list_mail();

    $scope.list_newsletter = function () {

        $.ajax({
            url: webService.URLserveur + 'newsletter',
            type: 'GET',
            async: false,
            dataType: 'json',
            success: function (data, statut) {
                $scope.standardSelectItemsNewsletter = data;
            },
            error: function (resultat, statut, erreur) {
                console.log("Oups, nous avons constaté l'erreur : " + erreur);
            }
        });
    };

    $scope.list_newsletter();


    $scope.inscrire = function () {
      $scope.message = "";
      var dataS = {};
      for (var i = 0; i < $scope.multipleSelectedItemsNewsletter.length; i++) {
        for (var j = 0; j < $scope.multipleSelectedItems.length; j++) {
          dataS.newsletter = $scope.multipleSelectedItemsNewsletter[i];
          dataS.users = $scope.multipleSelectedItems[j];
          dataS.subscriptionPK = {};
          dataS.subscriptionPK.newsletterId = $scope.multipleSelectedItemsNewsletter[i].newsletterId;
          dataS.subscriptionPK.userMail = $scope.multipleSelectedItems[i].userMail;
          $.ajax({
              url: webService.URLserveur + 'subscription',
              type: 'POST',
              contentType: "application/json",
              data: JSON.stringify(dataS),
              async: false,
              success: function (data, statut) {
                $scope.message += "\r\n" + "OK pour " + dataS.users.userMail + " avec la newsletter " + dataS.newsletter.newsletterTitle;
              },
              error: function (resultat, statut, erreur) {
                  $scope.message += "\r\n" + dataS.users.userMail + " est déjà inscrit à la newsletter " + dataS.newsletter.newsletterTitle;
              }
          });
        }
      }

    };
  }
})();
