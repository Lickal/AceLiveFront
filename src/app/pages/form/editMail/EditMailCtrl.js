(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('EditMailCtrl', EditMailCtrl);

    /** @ngInject */
    function EditMailCtrl($scope, $http, $timeout, $element) {

        $scope.addMail = function () {
            // TODO
            console.log("Test");
        };
    }
})();
