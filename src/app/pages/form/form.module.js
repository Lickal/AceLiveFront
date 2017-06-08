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
        .state('form.inputs', {
          url: '/newsletter',
          templateUrl: 'app/pages/form/inscriptionNewsletter/inscription.html',
          controller: 'InscriptionCtrl',
          title: 'Inscription Newsletter',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('form.addGroup', {
          url: '/addGroup',
          templateUrl: 'app/pages/form/addGroup/addGroup.html',
          controller: 'AddGroupCtrl',
          title: 'Création de groupe',
          sidebarMeta: {
            order: 1,
          },
        })
        .state('form.addMail', {
            url: '/addMail',
            templateUrl: 'app/pages/form/addMail/addMail.html',
            controller: 'AddMailCtrl',
            title: 'Ajout de mail',
            sidebarMeta: {
                order: 1,
            },
        })
        ;
  }
})();
