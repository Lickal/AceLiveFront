(function () {
  'use strict';

  angular.module('BlurAdmin.pages.campagne', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('campagne', {
            url: '/campagne',
            templateUrl: 'app/pages/campagne/campagne.html',
            abstract: true,
            title: 'Campagne',
            sidebarMeta: {
                icon: 'ion-map',
                disabled: true,
                order: 1,
            },
        })
        .state('campagne.addCampagne', {
            url: '/addCampagne',
            templateUrl: 'app/pages/campagne/addCampagne/addCampagne.html',
            controller: 'AddCampagneCtrl',
            title: 'Ajout de Campagne',
            sidebarMeta: {
                order: 1,
            },
        })
        .state('campagne.editCampagne', {
            url: '/editCampagne',
            templateUrl: 'app/pages/campagne/editCampagne/editCampagne.html',
            controller: 'EditCampagneCtrl',
            title: 'Modifier la Campagne',
            params: {
                id: null
            }
        })
        .state('campagne.listCampagne', {
            url: '/listCampagne',
            templateUrl: 'app/pages/campagne/listCampagne/listCampagne.html',
            controller: 'ListCampagneCtrl',
            title: 'Liste de Campagne',
            sidebarMeta: {
                order: 0,
            },
        })
        ;
  }
})();
