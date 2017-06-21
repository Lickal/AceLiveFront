
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.auth')
        .controller('LoginCtrl', LoginCtrl);

    /** @ngInject */
    function LoginCtrl($scope, $http, $timeout, $element, $state, webService, xml2json) {

      $scope.inputUsername = "";
      $scope.inputPassword = "";

      $scope.inscrire = function () {
        $state.go("auth.register");
      };

      $scope.connect = function () {

          $.ajax({
              url : 'http://localhost:8080/acelive/webresources/webservices.users',
              type : 'GET',
              dataType : 'xml',
              success : function(data, statut){
                  for (var i = 0; i < data.length; i++) {
                    data[i]
                  }

              },

              error : function(resultat, statut, erreur){
                  console.log("Oups, nous avons constaté l'erreur : " + erreur);
              }

          });
      };
    }
})();
