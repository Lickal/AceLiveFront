(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('ListNewsletterCtrl', ListNewsletterCtrl);

    /** @ngInject */
    function ListNewsletterCtrl($scope, $http, $timeout, $element) {

        $scope.addMail = function () {
            // TODO
            console.log("Test");
        };
    }
})();
