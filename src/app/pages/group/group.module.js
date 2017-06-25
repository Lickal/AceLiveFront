(function () {
  'use strict';

  angular.module('BlurAdmin.pages.group', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('group', {
            url: '/group',
            templateUrl: 'app/pages/group/group.html',
            abstract: true,
            title: 'Groupe',
            sidebarMeta: {
                icon: 'ion-person-stalker',
                order: 3,
            },
        })
        .state('group.addGroup', {
            url: '/addCampagne',
            templateUrl: 'app/pages/group/addGroup/addGroup.html',
            controller: 'AddGroupCtrl',
            title: 'Ajout un Groupe',
            sidebarMeta: {
                order: 0,
            },
        })
        .state('group.editGroup', {
            url: '/editGroup',
            templateUrl: 'app/pages/group/editGroup/editGroup.html',
            controller: 'EditGroupCtrl',
            title: 'Modifier le Groupe',
            params: {
                item: null
            }
        })
        .state('group.listGroup', {
            url: '/listGroup',
            templateUrl: 'app/pages/group/listGroup/listGroup.html',
            controller: 'ListGroupCtrl',
            title: 'Liste des Groupes',
            sidebarMeta: {
                order: 2,
            },
        })
        ;
  }
})();
