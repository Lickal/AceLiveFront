(function () {
    'use strict';

    angular.module('BlurAdmin.pages.group')
        .controller('EditGroupeCtrl', EditGroupeCtrl);

    /** @ngInject */
    function EditGroupeCtrl($scope, $http, $timeout, $element) {

        $scope.addMail = function () {
            // TODO
            console.log("Test");
        };
    }
})();
