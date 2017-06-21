
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campagne')
        .controller('AddCampagneCtrl', AddCampagneCtrl);

    /** @ngInject */
    function AddCampagneCtrl($scope, $http, $timeout, $element, webService, xml2json) {

        var valueNews = [];

        $scope.list_newsletter = function () {

            $.ajax({
                url : webService.URLserveur + 'newsletter',
                type : 'GET',
                dataType : 'xml',
                success : function(data, statut){

                    data = xml2json.parse(data);

                    if (data.newsletters.newsletter.length == 1){
                        valueNews[0] = {};
                        valueNews[0].label = "" + data.newsletters.newsletter.newsletterTitle;
                        valueNews[0].value = 1;
                    }else {
                        for (var i = 0; i < data.newsletters.newsletter.length; i++){
                            valueNews[i] = {};
                            valueNews[i].label = "" + data.newsletters.newsletter[i].newsletterTitle;
                            valueNews[i].value = i+1;
                        }
                        console.log(valueNews);
                    }
                    return valueNews;
                },
                error : function(resultat, statut, erreur){
                    console.log("Oups, nous avons constaté l'erreur : " + erreur);
                }
            });
        };

        $scope.list_newsletter();

        var text = '[' +
            '{ "firstName":"John" , "lastName":"Doe" },' +
            '{ "firstName":"Anna" , "lastName":"Smith" },' +
            '{ "firstName":"Peter" , "lastName":"Jones" } ]';

        vm.standardSelectItems = [
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
            { label: 'Option 4', value: 4 },
        ];
         var tes = JSON.parse(text);

         console.log(tes);

        $scope.standardSelectItems = [{ 'label':'John' , 'value':'Doe' }, { 'firstName':'Anna' , 'lastName':'Smith' }];

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
