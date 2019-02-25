(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 200) {
      $("#mainNav").addClass("navbar-scrolled");
      $('div#fixed-content').fadeOut();
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
      $('div#fixed-content').fadeIn();
    }
  };


  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); 



// End of use strict


// Mobile Video url update

$(document).ready(function(){

var device_width = $(window).width();

if(device_width < 601)
{
   $('video#bgvid source').attr('src','./img/mobile-banner-video.mp4');
   $('video#bgvid')[0].load();
   $('video#bgvid')[0].play();
}

if(device_width < 767 && device_width > 600)
{
   $('video#bgvid source').attr('src','./img/tab-banner-video.mp4');
   $('video#bgvid')[0].load();
   $('video#bgvid')[0].play();
}

});

// Mobile Video url update



