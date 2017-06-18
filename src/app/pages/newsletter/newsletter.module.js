(function () {
  'use strict';

  angular.module('BlurAdmin.pages.newsletter', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('newsletter', {
            url: '/newsletter',
            templateUrl: 'app/pages/newsletter/newsletter.html',
            abstract: true,
            title: 'Newsletter',
            sidebarMeta: {
                icon: 'ion-android-list',
                order: 4,
            },
        })
        .state('newsletter.addNewsletter', {
            url: '/addNewsletter',
            templateUrl: 'app/pages/newsletter/addNewsletter/addNewsletter.html',
            controller: 'AddNewsletterCtrl',
            title: 'Ajout de Newsletter',
            sidebarMeta: {
                order: 0,
            },
        })
        .state('newsletter.editNewsletter', {
            url: '/editNewsletter',
            templateUrl: 'app/pages/newsletter/editNewsletter/editNewsletter.html',
            controller: 'EditNewsletterCtrl',
            title: 'Modifier la Newsletter',
            sidebarMeta: {
                order: 1,
            },
        })
        .state('newsletter.listNewsletter', {
            url: '/listNewsletter',
            templateUrl: 'app/pages/newsletter/listNewsletter/listNewsletter.html',
            controller: 'ListNewsletterCtrl',
            title: 'Liste de Newsletter',
            sidebarMeta: {
                order: 2,
            },
        })
        .state('newsletter.inscriptionNewsletter', {
            url: '/inscriptionNewsletter',
            templateUrl: 'app/pages/newsletter/inscriptionNewsletter/inscriptionNewsletter.html',
            controller: 'InscriptionNewsletterCtrl',
            title: 'Inscription de Newsletter',
            sidebarMeta: {
                order: 3,
            },
        })
        .state('newsletter.sendNewsletter', {
            url: '/sendNewsletter',
            templateUrl: 'app/pages/newsletter/sendNewsletter/sendNewsletter.html',
            controller: 'SendNewsletterCtrl',
            title: 'Envoi de Newsletter',
            sidebarMeta: {
                order: 4,
            },
        })
        ;
  }
})();
