/*js menu mobile*/
$(document).ready(($) => {
  const $mobileMenu = $(".mobile-main-menu");
  const $menuToggle = $(".menu_toggle");
  const $body = $(".body");

  $('#trigger-mobile').click(() => {
      $mobileMenu.add($menuToggle).add($body).addClass('active');
  });

  $('.btn_close, .menu_toggle').click(() => {
      $mobileMenu.add($menuToggle).add($body).removeClass('active');
  });

  $(window).resize(() => {
      if ($(window).width() > 1023) {
          $mobileMenu.add($menuToggle).add($body).removeClass('active');
      }
  });

  // Assuming .fa1 and .fa2 are correct and exist within the DOM as indicated
  $mobileMenu.on('click', '.ng-has-child1 a .fa1', function(e) {
      e.preventDefault();
      var $subMenu = $(this).closest('.ng-has-child1').find('.ul-has-child1');
      $subMenu.stop().slideToggle();
      $(this).toggleClass('active');
  });

  $mobileMenu.on('click', '.ng-has-child1 .ul-has-child1 .ng-has-child2 a .fa2', function(e) {
      e.preventDefault();
      var $subSubMenu = $(this).closest('.ng-has-child2').find('.ul-has-child2');
      $subSubMenu.stop().slideToggle();
      $(this).toggleClass('active');
  });
});

// Slider
 var swiper = new Swiper(".list_content_social", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
             delay: 6000,
             disableOnInteraction: false,
             pauseOnMouseEnter: true,
        },
    // centeredSlides: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
    },
  });
// end