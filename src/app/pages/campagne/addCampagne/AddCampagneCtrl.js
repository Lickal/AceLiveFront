
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campagne')
        .controller('AddCampagneCtrl', AddCampagneCtrl);

    /** @ngInject */
    function AddCampagneCtrl($scope, $http, $timeout, $element, webService) {

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
            var campagne;
            webService.created_campagne(campagne,
                function (data) {
                    $window.location.href = '/listCampagne.html';
                },
                function () {
                    console.log("Oups, erreur");
                }
            );
        };
    }
})();
