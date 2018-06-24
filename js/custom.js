$( document ).ready(function() {
    
    
    
    
    
    
    
//    
    $('.slider-bg').slick({
        dots: true,
        arrows: true,
        prevArrow: '.nav-prev-bg',
        nextArrow: '.nav-next-bg',
        infinite: true,
        speed: 700,
    });
    
   
    
    
    
    var $menu = $("header");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    
    
    
    
$('.furniture').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.furniture-pagination'
  });
  $('.furniture-pagination').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.furniture',
    centerMode: true,
    focusOnSelect: true
  });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $('.sldr-video-review').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.review-preview'
    });
    $('.review-preview').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.sldr-video-review, .auth-sldr',
        centerMode: true,
        focusOnSelect: true
    });
    
    $('.auth-sldr').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.review-preview'
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});