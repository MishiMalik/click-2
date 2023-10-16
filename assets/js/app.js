// ========================================================================navbar close on scroll and click
$(".open-icon").on("click", function () {
  $(".close-icon").css("display", "block");
  $(this).css("display", "none");
  $(".menu-links").css("left", "0");
  $(".menu-links").css("top", "60px");
  $("body").css("overflow-y", "hidden");
});
$(".close-icon").on("click", function () {
  $(this).css("display", "none");
  $(".open-icon").css("display", "block");
  $(".menu-links").css("top", "60px");
  $(".menu-links").css("left", "-500px");
  $("body").css("overflow-y", "auto");
});
//   $(document).ready(function() {
//     $('.dropdown-toggle').click(function() {
//         var $submenu = $(this).siblings('.dropdown-menu');
//         $submenu.toggle(); // Toggle display using jQuery's toggle method
//     });
// });
// =======================================video buttons
let vid = document.getElementById("myVideo");

function playVid() {
  vid.play();
}

function pauseVid() {
  vid.pause();
}

$(".video-btn-play").on("click", function () {
  $(".video-btn-pause").css("display", "block");
  $(this).css("display", "none");
});
$(".video-btn-pause").on("click", function () {
  $(".video-btn-play").css("display", "block");
  $(this).css("display", "none");
});

// ============================================slider
(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 1,
          nav: false,
          loop: false
        },
        1000: {
          items: 2,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();


  $(".owl-carousel2").owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      400:{
        items: 2,
        nav: false,
        loop: false
      },
      680: {
        items: 3,
        nav: false,
        loop: false
      },
      1000: {
        items: 4,
        nav: false
      }
    }
  });

// $('.slider-single').slick({

//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   fade: false,
//   adaptiveHeight: true,
//   infinite: false,
//  useTransform: true,
//   speed: 400,
//   cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
// });

// $('.slider-nav')
//   .on('init', function(event, slick) {
//     $('.slider-nav .slick-slide.slick-current').addClass('is-active');
//   })
//   .slick({
//     slidesToShow: 7,
//     slidesToScroll: 7,
//     dots: false,
//     focusOnSelect: false,
//     infinite: false,
//     responsive: [{
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 5,
//       }
//     }, {
//       breakpoint: 640,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//      }
//     }, {
//       breakpoint: 420,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//    }
//     }]
//   });

  // $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true
  // });