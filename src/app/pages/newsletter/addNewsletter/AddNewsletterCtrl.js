(function () {
  'use strict';

  angular.module('BlurAdmin.pages.newsletter')
      .controller('AddNewsletterCtrl', AddNewsletterCtrl);

  /** @ngInject */
  function AddNewsletterCtrl($scope, $http, $timeout, $element, webService, xml2json) {

    $scope.objet_newsletter = "";
    $scope.date_newsletter;
    $scope.pj_newsletter = "";
    $scope.description_newsletter = "";


    $scope.createNewsletter = function () {
      // TODO
      var newsletter = {
          campaignId : {
            campaignClic : 0,
            campaignDescription : "Campagne de pub pepsi",
            campaignId : 1,
            campaignName : "Pepsi"
          },
          newsletterDescription : $scope.description_newsletter,
          newsletterPJ : $scope.pj_newsletter,
          newsletterTitle : $scope.objet_newsletter
      };

      $.ajax({
         url : webService.URLserveur + '.newsletter',
         type : 'POST',
         contentType: "application/json",
         data : JSON.stringify(newsletter),
         success : function(data, statut){ // success est toujours en place, bien sûr !
           console.log("OK !");
         },

         error : function(resultat, statut, erreur){
           alert("Erreur " + statut);
         }

      });
    };
  }
})();
