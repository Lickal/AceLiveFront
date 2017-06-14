
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('EditCampagneCtrl', EditCampagneCtrl);

    /** @ngInject */
    function EditCampagneCtrl($scope, $http, $timeout, $element) {

        $scope.addMail = function () {
            // TODO
            console.log("Test");
        };
    }
})();
