(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('SendNewsletterCtrl', SendNewsletterCtrl);

    /** @ngInject */
    function SendNewsletterCtrl($scope, $http, $timeout, $element) {

        $scope.addMail = function () {
            // TODO
            console.log("Test");
        };
    }
})();
