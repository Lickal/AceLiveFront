/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig) {
    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      //height: 335,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-06-26',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Lancement newsletter de juillet',
          start: '2017-07-01',
          end: '2017-07-10',
          color: dashboardColors.silverTree
        },
        {
          title: 'Passage à l\'oral',
          start: '2017-06-26',
          color: dashboardColors.blueStone
        },
        {
          title: 'Pleurer sur sa note de projet Virtu',
          start: '2017-06-28T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Lancement newsletter de août',
          start: '2017-08-01',
          end: '2017-08-10',
          color: dashboardColors.gossipDark
        }
      ]
    });
  }
})();
