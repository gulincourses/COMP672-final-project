$(document).ready(function () {
  console.log("Document ready");
  $("#reservation-date").flatpickr({
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
      {
        from: "2024-12-19",
        to: "2025-01-06",
      },
    ],
  });
  $("#reservation-time").flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
    minuteIncrement: 30,
    minTime: "15:00",
    maxTime: "21:00",
  });

  // $("#reservation-form").on("submit", function (event) {
  //   event.preventDefault();
  //   console.log(this);
  //   console.log("Reservation Form submitted");
  //   $(this).addClass("validated");
  //   console.log("Class 'validated' added to form");
  // });

  // $(document).on("submit", "#reservation-form", function (event) {
  //   event.preventDefault();
  //   console.log(this);
  //   console.log("Reservation Form submitted");
  //   $(this).addClass("validated");
  //   console.log("Class 'validated' added to form");
  // });
  // $(document).on("submit", "#reservation-form", function (event) {
  //   event.preventDefault();
  //   setTimeout(() => {
  //     console.log(this);
  //     console.log("Reservation Form submitted");
  //     $(this).addClass("validated");
  //     console.log("Class 'validated' added to form");
  //   }, 0);
  // });
});
