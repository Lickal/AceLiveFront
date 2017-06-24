(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mail', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('mail', {
            url: '/mail',
            templateUrl: 'app/pages/mail/mail.html',
            abstract: true,
            title: 'Mail',
            sidebarMeta: {
                icon: 'ion-android-mail',
                order: 2,
            },
        })
        .state('mail.addMail', {
            url: '/addMail',
            templateUrl: 'app/pages/mail/addMail/addMail.html',
            controller: 'AddMailCtrl',
            title: 'Ajout de Mail',
            sidebarMeta: {
                order: 0,
            },
        })
        .state('mail.editMail', {
            url: '/editMail',
            templateUrl: 'app/pages/mail/editMail/editMail.html',
            controller: 'EditMailCtrl',
            title: 'Modifier le Mail',
        })
        .state('mail.listMail', {
            url: '/listMail',
            templateUrl: 'app/pages/mail/listMail/listMail.html',
            controller: 'ListMailCtrl',
            title: 'Liste de Mail',
            sidebarMeta: {
                order: 3,
            },
        })
        ;
  }
})();
