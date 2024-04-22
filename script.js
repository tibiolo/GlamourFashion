// Open/Close - Login Popup

function openForm() {
  document.getElementById("login-popup").style.display = "grid";
}

function closeForm() {
  document.getElementById("login-popup").style.display = "none";
}

// Selection - Button Animation

//$("#selection-banner").hover(function () {
//  $(".shop-now-button").css("opacity", "100%");
//});

$("#selection-banner1").hover(function () {
    // over
    $(".shop-now-button1").animate({
      opacity: '1',
    }, "fast");
  }, function () {
    // out
    $(".shop-now-button1").animate({
      opacity: '0',
    }, "fast");
  }
);

$("#selection-banner2").hover(function () {
  // over
  $(".shop-now-button2").animate({
    opacity: '1',
  }, "fast");
}, function () {
  // out
  $(".shop-now-button2").animate({
    opacity: '0',
  }, "fast");
}
);