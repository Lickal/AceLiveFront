
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.auth')
        .controller('LoginCtrl', LoginCtrl);

    /** @ngInject */
    function LoginCtrl($scope, $http, $timeout, $element, $state, UserService, webService, xml2json) {

      $scope.inputUsername = "";
      $scope.inputPassword = "";

      $scope.connect = function () {

        var mdpfalse = false;
        var notConnected = true;

          $.ajax({
              url : webService.URLserveur + 'administrateur',
              type : 'GET',
              contentType : 'application/json',
              success : function(data, statut){
                  for (var i = 0; i < data.length; i++) {
                    if (data[i].adminName == $scope.inputUsername || data[i].adminMail == $scope.inputUsername) {
                      if (data[i].adminPassword == $scope.inputPassword) {
                        notConnected = false;
                        UserService.connected = true;
                        window.open ('dashboard','_self',false)
                      }else {
                        mdpfalse = true;
                      }
                    }
                  }

                  if (mdpfalse) {
                    alert("Mot de passe incorrect !");
                  }else if (notConnected) {
                    alert("Identifiant inconnu");
                  }

              },

              error : function(resultat, statut, erreur){
                  console.log("Oups, nous avons constaté l'erreur : " + erreur);
              }

          });
      };
    }
})();
