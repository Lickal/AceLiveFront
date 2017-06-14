
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('AddCampagneCtrl', AddCampagneCtrl);

    /** @ngInject */
    function AddCampagneCtrl($scope, $http, $timeout, $element) {

        $scope.create = function () {
            // TODO
            console.log("Test");
        };
    }
})();
