(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('ListCampagneCtrl', ListCampagneCtrl);

    /** @ngInject */
    function ListCampagneCtrl($scope, $http, $timeout, $element) {

        $scope.addMail = function () {
            // TODO
            console.log("Test");
        };
    }
})();
