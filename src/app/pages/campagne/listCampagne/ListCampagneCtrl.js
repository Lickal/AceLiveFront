(function () {
    'use strict';

    angular.module('BlurAdmin.pages.campagne')
        .controller('ListCampagneCtrl', ListCampagneCtrl);

    /** @ngInject */
    function ListCampagneCtrl($scope, $http, $timeout, $element) {

        //listCampagne();

        $scope.listCampagne = function () {

            // TODO
            webService.liste_campagne(
                function (data) {

                    $scope.smartTablePageSize = 10;

                    $scope.smartTableData = [
                        {
                            id: 1,
                            name: 'Mark',
                            mail: '@mdo',
                            age: '28'
                        },
                        {
                            id: 2,
                            name: 'Jacob',
                            mail: '@fat',
                            age: '45'
                        },
                        {
                            id: 3,
                            name: 'Larry',
                            mail: '@twitter',
                            age: '18'
                        }
                    ];
                },
                function () {
                    console.log("Oups, erreur");
                }
            );
        };
/*
        $scope.deleteCampagne = function () {

            // TODO
            var campagne;
            webService.deleteCampagne(campagne,
                function (data) {
                    $window.location.href = '/listCampagne.html';
                },
                function () {
                    console.log("Oups, erreur");
                }
            );
        };

        $scope.editCampagne = function () {

            // TODO
            var campagne;
            webService.editCampagne(campagne,
                function (data) {
                    $window.location.href = '/listCampagne.html';
                },
                function () {
                    console.log("Oups, erreur");
                }
            );
        };
        */
    }
})();
