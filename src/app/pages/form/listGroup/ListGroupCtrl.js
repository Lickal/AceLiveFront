(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('ListGroupCtrl', ListGroupCtrl);

    /** @ngInject */
    function ListGroupCtrl($scope, $http, $timeout, $element) {

        $scope.addMail = function () {
            // TODO
            console.log("Test");
        };
    }
})();
