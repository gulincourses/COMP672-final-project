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

  $("#reservation-form").submit(function (event) {
    event.preventDefault();

    let name = $("#reservation-name").val();
    let email = $("#reservation-email").val();
    let date = $("#reservation-date").val();
    let time = $("#reservation-time").val();
    let people = $("#reservation-people").val();

    let isValid = true;

    if (!name) {
      isValid = false;
      $("#reservation-name")
        .removeClass("custom-valid")
        .addClass("custom-invalid");
    } else {
      $("#reservation-name")
        .removeClass("custom-invalid")
        .addClass("custom-valid");
    }

    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailPattern = /\S+@\S+\.\S+/;
    if (!email || !emailPattern.test(email)) {
      isValid = false;
      $("#reservation-email")
        .removeClass("custom-valid")
        .addClass("custom-invalid");
      console.log("Email is invalid");
    } else {
      $("#reservation-email")
        .removeClass("custom-invalid")
        .addClass("custom-valid");
    }

    if (!date) {
      isValid = false;
      $("#reservation-date")
        .removeClass("custom-valid")
        .addClass("custom-invalid");
      console.log("Date is empty!");
    } else {
      $("#reservation-date")
        .removeClass("custom-invalid")
        .addClass("custom-valid");
    }

    if (!time) {
      isValid = false;
      $("#reservation-time")
        .removeClass("custom-valid")
        .addClass("custom-invalid");
      console.log("Time is empty!");
    } else {
      $("#reservation-time")
        .removeClass("custom-invalid")
        .addClass("custom-valid");
    }

    if (!people) {
      isValid = false;
      $("#people").removeClass("custom-valid").addClass("custom-invalid");
      console.log("Party size is empty!");
    } else {
      $("#people").removeClass("custom-invalid").addClass("custom-valid");
    }

    if (isValid) {
      console.log(
        `Name: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nParty size: ${people}`
      );
      alert(
        `Name: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nParty size: ${people} \nYour reservation has been submitted, we will send you a confirmation email once your reservation is confirmed.\nThank you!`
      );
    } else {
      alert("Please validate and fill in all fields shown in red.");
    }
  });
});
