$(document).ready(function() {
    
    
    /* STICKY NAVIGATION */
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky'); 
        
        }
    }, {
      offset: '60px;'
    });
    
    /* SCROLL ON BUTTONS */
    
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);  
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);  
    });
    
    /* NAVIGATION SCROLL */
    
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);  
    });
    $('.js--scroll-to-how-it-works').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-how-it-works').offset().top}, 1000);  
    });
    $('.js--scroll-to-cities').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top}, 1000);  
    });
    $('.js--scroll-to-sign-up').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);  
    });
    
    
    /* ANIMATIONS ON SCROLL */
    
    $('.js--wp-1').waypoint(
    (direction) => {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
      offset: '50%'
    });
    
    
    $('.js--wp-2').waypoint(
    (direction) => {
      $('.js--wp-2').addClass('animate__animated  animate__backInUp');
    }, {
      offset: '50%'
    });
    
    
    $('.js--wp-3').waypoint(
    (direction) => {
      $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
      offset: '50%'
    });
    
    
    $('.js--wp-4').waypoint(
    (direction) => {
      $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
      offset: '50%'
    });
    
    /* MOBILE NAVIGATION */
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-ios-menu')) {
           icon.addClass('ion-ios-close-circle');
           icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
           icon.removeClass('ion-ios-close-circle');
        }
    });
    
});