/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil, webService) {

    var nbNewsletter;
    var nbUsers;
    var nbCampagnes;

      $('.refresh-data').on('click', function () {
        updatePieCharts();
      });

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      });
    }

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.chart').each(function () {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });
    }

    $.ajax({
        url: webService.URLserveur + 'newsletter',
        type: 'GET',
        async: false,
        dataType: 'json',
        success: function (data, statut) {
          nbNewsletter = data.length;
          $.ajax({
              url: webService.URLserveur + 'users',
              type: 'GET',
              async: false,
              dataType: 'json',
              success: function (data, statut) {
                nbUsers = data.length;
                $.ajax({
                    url: webService.URLserveur + 'users',
                    type: 'GET',
                    async: false,
                    dataType: 'json',
                    success: function (data, statut) {
                      nbCampagnes = data.length;
                      var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
                      $scope.charts = [{
                        color: pieColor,
                        description: 'Newsletters créées',
                        stats: nbNewsletter+'',
                        icon: 'mail',
                      }, {
                        color: pieColor,
                        description: 'Clics générés',
                        stats: '32',
                        icon: 'navigate',
                      }, {
                        color: pieColor,
                        description: 'Nombre d\'users',
                        stats: nbUsers+'',
                        icon: 'contacts',
                      }, {
                        color: pieColor,
                        description: 'Campagnes',
                        stats: nbCampagnes+'',
                        icon: 'archive',
                      }
                      ];
                      loadPieCharts();
                      updatePieCharts();
                    },
                    error: function (resultat, statut, erreur) {
                        console.log("Oups, nous avons constaté l'erreur : " + erreur);
                    }})
            },
            error: function (resultat, statut, erreur) {
                console.log("Oups, nous avons constaté l'erreur : " + erreur);
            }})
        },
        error: function (resultat, statut, erreur) {
            console.log("Oups, nous avons constaté l'erreur : " + erreur);
        }
    });

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
