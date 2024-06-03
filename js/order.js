$(document).ready(function () {
  // assign unique id to each quantity input
  $(".button-group").each(function (index) {
    let uniqueId = "quantity-" + index;
    $(this).find("label").attr("for", uniqueId);
    $(this).find("input.quantity").attr("id", uniqueId);
  });

  // assign unique id to each textarea

  $(".special-instructions").each(function (index) {
    let uniqueId = "special-instructions-" + index;
    $(this).prev("label").attr("for", uniqueId);
    $(this).attr("id", uniqueId);
  });

  $(".card-main").click(function () {
    $(this).next(".modal").show();
    // add class to modal to show it
    $(this).next(".modal").addClass("modal-open");
    $;
  });

  // menu search
  $("#search").keypress(function (event) {
    if (event.which === 13) {
      let searchTerm = $(this).val().toLowerCase();
      $(".menu-item-card").each(function () {
        // let title = $(this).find("h3").text().toLowerCase();
        let text = $(this).text().toLowerCase();
        console.log(text);
        if (text.includes(searchTerm)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });

      // console.log(searchTerm);
    }
  });

  // closest() method returns the first ancestor of the selected element.
  $(".close").click(function () {
    $(this).closest(".modal").hide();
    $(this).closest(".modal").removeClass("modal-open");
  });
  // Hide the modal when the user clicks outside of the modal content
  $(".modal").click(function (event) {
    if ($(event.target).is(".modal")) {
      $(this).hide();
    }
  });

  $(".quantity-increase").click(function () {
    console.log("clicked");
    // $quantity is an object, not a value
    let $quantity = $(this).siblings(".quantity");
    let cur = parseInt($quantity.val());

    console.log(cur);
    if (cur < 10) {
      $quantity.val(cur + 1);
    }
  });

  // decrease  quantity
  $(".quantity-decrease").click(function () {
    let $quantity = $(this).siblings(".quantity");
    let cur = parseInt($quantity.val());
    if (cur > 1) {
      $quantity.val(cur - 1);
    }
  });
  // arrow top
  $(".top").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }
  });

  // add to cart alert
  $(".add-to-cart").click(function () {
    console.log("added to card clicked");
    // Get the product name from data attribute
    let title = $(this).closest(".menu-item-card").find("h3").text().trim();
    // Get the quantity from the sibling input
    let quantity = $(this).closest(".menu-item-card").find(".quantity").val();

    $(this).closest(".modal").hide();
    // Alert the user
    // alert(`Added to cart: ${title} (Quantity: ${quantity})`);
    alert(
      `Item: ${title}\nQuantity: ${quantity}\nhave been added to your cart!`
    );
  });
});
