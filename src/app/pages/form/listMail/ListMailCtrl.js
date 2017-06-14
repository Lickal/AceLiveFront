(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('ListMailCtrl', ListMailCtrl);

    /** @ngInject */
    function ListMailCtrl($scope, $http, $timeout, $element) {

        $scope.addMail = function () {
            // TODO
            console.log("Test");
        };
    }
})();
