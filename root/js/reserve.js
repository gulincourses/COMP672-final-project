$(document).ready(function () {
  $("#date").flatpickr({
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    disable: [
      function (date) {
        // closed on Sundays and Mondays
        return date.getDay() === 0 || date.getDay() === 1;
      },

      "2024-07-04",
    ],
  });
  $("#time").flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
    minuteIncrement: 30,
    minTime: "15:00",
    maxTime: "21:00",
  });
});
