(function () {
    'use strict';

    angular.module('BlurAdmin.pages.mail')
        .controller('ListMailCtrl', ListMailCtrl);

    /** @ngInject */
    function ListMailCtrl($scope, $http, $timeout, $element, $state) {

        $scope.smartTablePageSize = 10;

        $scope.smartTableData = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                age: '28'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                age: '45'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                age: '18'
            }
        ];

        $scope.editableTableData = $scope.smartTableData.slice(0, 36);

        $scope.edit = function (mail) {

            $state.go("mail.editMail", {mail: mail});

        };
    }

})();
