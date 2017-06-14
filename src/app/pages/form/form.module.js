/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form', ['ui.select', 'ngSanitize'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('form', {
          url: '/inscription',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Inscription',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('form.addCampagne', {
            url: '/addCampagne',
            templateUrl: 'app/pages/form/addCampagne/addCampagne.html',
            controller: 'AddCampagneCtrl',
            title: 'Ajout de Campagne',
            sidebarMeta: {
                order: 0,
            },
        })
        .state('form.addGroup', {
            url: '/addGroup',
            templateUrl: 'app/pages/form/addGroup/addGroup.html',
            controller: 'AddGroupCtrl',
            title: 'Ajout de Groupe',
            sidebarMeta: {
                order: 1,
            },
        })
        .state('form.addMail', {
            url: '/addMail',
            templateUrl: 'app/pages/form/addMail/addMail.html',
            controller: 'AddMailCtrl',
            title: 'Ajout d un User Mail',
            sidebarMeta: {
                order: 2,
            },
        })
        .state('form.addNewsletter', {
            url: '/addNewsletter',
            templateUrl: 'app/pages/form/addNewsletter/addNewsletter.html',
            controller: 'AddNewsletterCtrl',
            title: 'Ajout de Newsletter',
            sidebarMeta: {
                order: 3,
            },
        })
        .state('form.editCampagne', {
            url: '/editCampagne',
            templateUrl: 'app/pages/form/editCampagne/editCampagne.html',
            controller: 'EditCampagneCtrl',
            title: 'Modifier la Campagne',
            sidebarMeta: {
                order: 4,
            },
        })
        .state('form.editGroup', {
            url: '/editGroup',
            templateUrl: 'app/pages/form/editGroup/editGroup.html',
            controller: 'EditGroupCtrl',
            title: 'Modifier un Groupe',
            sidebarMeta: {
                order: 5,
            },
        })
        .state('form.editMail', {
            url: '/editMail',
            templateUrl: 'app/pages/form/editMail/editMail.html',
            controller: 'EditMailCtrl',
            title: 'Modifier un User Mail',
            sidebarMeta: {
                order: 6,
            },
        })
        .state('form.editNewsletter', {
            url: '/editNewsletter',
            templateUrl: 'app/pages/form/editNewsletter/editNewsletter.html',
            controller: 'EditNewsletterCtrl',
            title: 'Modifier une Newsletter',
            sidebarMeta: {
                order: 7,
            },
        })
        .state('form.inputs', {
            url: '/newsletter',
            templateUrl: 'app/pages/form/inscriptionNewsletter/inscription.html',
            controller: 'InscriptionCtrl',
            title: 'Inscription Newsletter',
            sidebarMeta: {
                order: 8,
            },
        })
        .state('form.listCampagne', {
            url: '/listCampagne',
            templateUrl: 'app/pages/form/listCampagne/listCampagne.html',
            controller: 'ListCampagneCtrl',
            title: 'Liste de Campagne',
            sidebarMeta: {
                order: 9,
            },
        })
        .state('form.listGroup', {
            url: '/listGroup',
            templateUrl: 'app/pages/form/listGroup/listGroup.html',
            controller: 'ListGroupCtrl',
            title: 'Liste de Groupe',
            sidebarMeta: {
                order: 10,
            },
        })
        .state('form.listMail', {
            url: '/listMail',
            templateUrl: 'app/pages/form/listMail/listMail.html',
            controller: 'ListMailCtrl',
            title: 'Liste de User Mail',
            sidebarMeta: {
                order: 11,
            },
        })
        .state('form.listNewsletter', {
            url: '/listNewsletter',
            templateUrl: 'app/pages/form/listNewsletter/listNewsletter.html',
            controller: 'ListNewsletterCtrl',
            title: 'Liste de Newsletter',
            sidebarMeta: {
                order: 12,
            },
        })
        .state('form.sendNewsletter', {
            url: '/sendNewsletter',
            templateUrl: 'app/pages/form/sendNewsletter/sendNewsletter.html',
            controller: 'SendNewsletterCtrl',
            title: 'Envoi de Newsletter',
            sidebarMeta: {
                order: 13,
            },
        })
        ;
  }
})();
