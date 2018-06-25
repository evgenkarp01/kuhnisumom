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
    
    
    
    
    var locations = [
            ["Ульяновская д.25", 47.216003, 39.714761, "http://ewal-web.ru/assets/site/img/map-marker-kuhnisumom.png"],
        ];
        var map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 18,
            styles: 
            [
                {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
                {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
                {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
                {"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}
            ],
            center: new google.maps.LatLng(47.216003, 39.714761),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();
        var marker, i;

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: {
                    url: locations[i][3],
                    scaledSize: new google.maps.Size(50, 75)
                }
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    
    
    
    $("#navToggle").click(function() {
	    $(this).toggleClass("active");
	    $(".overlay").toggleClass("open");
	    // this line ▼ prevents content scroll-behind
	    $("body").toggleClass("locked"); 
	});
    
    
    
    
    
    
    
    
    
    
    
});