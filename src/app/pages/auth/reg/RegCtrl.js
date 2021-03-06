
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.auth')
        .controller('RegCtrl', RegCtrl);

    /** @ngInject */
    function RegCtrl($scope, $http, $timeout, $element, $state, webService, xml2json) {

      $scope.inscrire = function () {
        $state.go("auth.register");
      };

        var vm = this;

        $scope.list_newsletter = function () {

            $.ajax({
                url : 'http://localhost:8080/acelive/webresources/webservices.newsletter',
                type : 'GET',
                dataType : 'xml',
                success : function(data, statut){
                    data = xml2json.parse(data);
                    console.log(data);
                    console.log(data.newsletterss.newsletters[0].newsletterTitle);

                    vm.standardSelectItems = [

                        { label: 'Option 1', value: 1 },
                        { label: 'Option 2', value: 2 },
                        { label: 'Option 3', value: 3 },
                        { label: 'Option 4', value: 4 },
                    ];


                },

                error : function(resultat, statut, erreur){
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }

            });
        };

        $scope.create = function () {

            // TODO il faut récupérer les valeurs du form pour les mettre dans ce WS
            var user = {};
            $.ajax({
               url : webService.URLserveur + '.administrateur',
               type : 'GET',
               dataType : 'xml',
               success : function(data, statut){ // success est toujours en place, bien sûr !
                    console.log(data);
                    data = xml2json.parse(data);
                   console.log(data);
               },

               error : function(resultat, statut, erreur){

               }

            });
        };
    }
})();
