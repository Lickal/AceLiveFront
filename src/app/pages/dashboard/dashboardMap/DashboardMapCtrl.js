/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardMapCtrl', DashboardMapCtrl);

  /** @ngInject */
  function DashboardMapCtrl($timeout) {
    function initialize() {
      L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet/dist/images';
      var map = L.map(document.getElementById('leaflet-map')).setView([43.643567, 3.838217], 13);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([43.643567, 3.838217]).addTo(map)
          .bindPopup('AceLive Montpellier')
          .openPopup();
    }

    $timeout(function(){
      initialize();
    }, 100);
  }
})();
