(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('EditNewsletterCtrl', EditNewsletterCtrl);

    /** @ngInject */
    function EditNewsletterCtrl($scope, $http, $timeout, $element) {

        $scope.addMail = function () {
            // TODO
            console.log("Test");
        };
    }
})();
