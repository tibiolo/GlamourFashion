// Open/Close - Login Popup

function openForm() {
  document.getElementById("login-popup").style.display = "grid";
}

function closeForm() {
  document.getElementById("login-popup").style.display = "none";
}

// Selection - Button Animation

$("#selection-banner1").hover(function () {
    // over
    $(".shop-now-button1").animate({
      opacity: '1',
    }, "fast");

    $(".selection-banner-img1").css("filter", "blur(2px)")

  }, function () {
    // out
    $(".shop-now-button1").animate({
      opacity: '0',
    }, "fast");

    $(".selection-banner-img1").css("filter", "blur(0px)")

  }
);

$("#selection-banner2").hover(function () {
  // over
  $(".shop-now-button2").animate({
    opacity: '1',
  }, "fast");

  $(".selection-banner-img2").css("filter", "blur(2px)")

}, function () {
  // out
  $(".shop-now-button2").animate({
    opacity: '0',
  }, "fast");

  $(".selection-banner-img2").css("filter", "blur(0px)")

}
);

