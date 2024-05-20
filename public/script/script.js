// Open/Close - Login Popup

function openForm() {
  document.getElementById("login-popup").style.display = "grid";
}

function closeForm() {
  document.getElementById("login-popup").style.display = "none";
}

// Selection - Button Animation - Image Background Blur

if (window.matchMedia("(min-width: 600px)").matches) {
  $("#selection-banner1").hover(
    function () {
      // over
      $(".shop-now-button1").animate(
        {
          opacity: "1",
        },
        "fast"
      );

      $(".selection-banner-img1").css("filter", "blur(2px)");
    },
    function () {
      // out
      $(".shop-now-button1").animate(
        {
          opacity: "0",
        },
        "fast"
      );

      $(".selection-banner-img1").css("filter", "blur(0px)");
    }
  );

  $("#selection-banner2").hover(
    function () {
      // over
      $(".shop-now-button2").animate(
        {
          opacity: "1",
        },
        "fast"
      );

      $(".selection-banner-img2").css("filter", "blur(2px)");
    },
    function () {
      // out
      $(".shop-now-button2").animate(
        {
          opacity: "0",
        },
        "fast"
      );

      $(".selection-banner-img2").css("filter", "blur(0px)");
    }
  );
}

// SHOP DISPLAY 

// Hides main images and displays the 2nd ones..
const productContainers = document.querySelectorAll('.product-image-container');

productContainers.forEach(container => {
  container.addEventListener('mouseenter', () => {
    container.querySelector('.product-main-img').style.display = 'none';
    container.querySelector('.product-hover-img').style.display = 'block';
  });

  container.addEventListener('mouseleave', () => {
    container.querySelector('.product-main-img').style.display = 'block';
    container.querySelector('.product-hover-img').style.display = 'none';
  });
});


// Single Product Display Page //

document.addEventListener('DOMContentLoaded', function() {
  var carousel = new Flickity('.product-image-carousel', {
    // Optional configuration options for Flickity
    // (e.g., cellAlign, contain, wrapAround, etc.)
    autoPlay: true
  });
});