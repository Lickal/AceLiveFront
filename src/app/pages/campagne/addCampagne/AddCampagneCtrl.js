
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campagne')
        .controller('AddCampagneCtrl', AddCampagneCtrl);

    /** @ngInject */
    function AddCampagneCtrl($scope, $http, $timeout, $element, webService, xml2json) {

        var vm = this;

        //list_newsletter();

        $scope.list_newsletter = function () {

            webService.liste_newsletter(
                function (data) {

                    // TODO il faudrait faire ça mais en générique avec le json qu'on recoit

                    vm.standardSelectItems = [
                        { label: 'Option 1', value: 1 },
                        { label: 'Option 2', value: 2 },
                        { label: 'Option 3', value: 3 },
                        { label: 'Option 4', value: 4 },
                    ];
                },
                function () {
                    console.log("Oups, erreur");
                }
            );
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
