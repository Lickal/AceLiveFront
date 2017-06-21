(function () {
  'use strict';

  angular.module('BlurAdmin.pages.auth', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('auth', {
            url: '/auth',
            templateUrl: 'app/pages/auth/auth.html',
            abstract: true,
            title: 'Auth',
            sidebarMeta: {
                icon: 'ion-unlocked',
                order: 1,
            },
        })
        .state('auth.login', {
            url: '/login',
            templateUrl: 'app/pages/auth/login/login.html',
            controller: 'LoginCtrl',
            title: 'Login',
            sidebarMeta: {
                order: 1,
            },
        })
        .state('auth.register', {
            url: '/register',
            templateUrl: 'app/pages/auth/reg/reg.html',
            controller: 'RegCtrl',
            title: 'Inscription',
            sidebarMeta: {
                order: 1,
            },
        })
        ;
  }
})();
