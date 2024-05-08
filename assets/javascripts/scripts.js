$(document).ready(function(){
    //jquery for toggle sub menus
    $('.sub-btn').click(function(){
      $(this).next('.sub-menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
    });

    //jquery for expand and collapse the sidebar
    $('.menu-btn').click(function(){
      $('nav').css("left", "0");
      $('.menu-btn').addClass("hide");
    });

    $('.close-btn').click(function(){
      $('nav').css("left", "-100%");
      $('.menu-btn').removeClass("hide");
    });
  });

$('.hero-slider').slick({
    slidesToShow: 1,
    prevArrow: $(".themes-carousel-controls .prev"),
    nextArrow: $(".themes-carousel-controls .next"),
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    fade: true
  });



  
