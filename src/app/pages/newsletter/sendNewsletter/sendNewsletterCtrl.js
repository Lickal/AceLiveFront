(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('SendNewsletterCtrl', SendNewsletterCtrl);

    /** @ngInject */
    function SendNewsletterCtrl($scope, $http, $timeout, $element, webService, $state) {

      $scope.selected = {};

      $scope.listNewsletter = function () {

          $.ajax({
              url: webService.URLserveur + 'subscription',
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

        $scope.sendMail = function (item) {
          var data = {};
          data.objet = item.newsletter.newsletterTitle;
          data.destinataire = item.subscriptionPK.userMail;
          data.message = item.newsletter.newsletterDescription;
          $.ajax({
             url : webService.URLserveur + 'mail',
             type : 'POST',
             contentType: "application/json",
             data : JSON.stringify(data),
             success : function(data, statut){ 
               console.log("OK !");
             },

             error : function(resultat, statut, erreur){
               alert("Erreur " + statut);
             }

          });
        };
    }
})();
