$( document ).ready(function() {
    
    
    $(function(){
        $('[name="phone_cont"]').mask("+7(999) 999-99-99");
        $('[name="phone_modal"]').mask("+7(999) 999-99-99");
    });








    function call(ev) {
 	  var msg   = $(ev).closest('form').serialize();
        $.ajax({
          type: 'POST',
          url: '../php/send.php',
          data: msg,
          success: function(data) {
            $(ev).closest('.result').html(data);
            $(ev).slideUp('fast');
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }

    
    $('#btn_modal').on('click', function(){
        if(($('[name="name_modal"]').val()!='')&&($('[name="phone_modal"]').val()!='')&&($('[name="phone_modal"]').val()!='+7(___)___-__-__')){
             call(this);
           }
    });
    $('#btn_cont').on('click', function(){
        if(($('[name="name_cont"]').val()!='')&&($('[name="phone_cont"]').val()!='')&&($('[name="phone_cont"]').val()!='+7(___)___-__-__')){
             call(this);
           }
    });









    
    
    $("a.ancLinks").click(function () { 
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$('html,body').animate( { scrollTop: destination }, 400 );
			return false;
		});
    


    var lastId,
	  topMenu = $("#top-menu"),
	  topMenuHeight = topMenu.outerHeight() + 15,
	  // All list items
	  menuItems = topMenu.find("a"),
	  // Anchors corresponding to menu items
	  scrollItems = menuItems.map(function() {
	    var item = $($(this).attr("href"));
	    if (item.length) {
	      return item;
	    }
	  });

	  $(window).scroll(function() {
		  // Get container scroll position
		  var fromTop = $(this).scrollTop() + topMenuHeight+200;
		  // Get id of current scroll item
		  var cur = scrollItems.map(function() {
		    if ($(this).offset().top < fromTop)
		      return this;
		  });
		  // Get the id of the current element
		  cur = cur[cur.length - 1];
		  var id = cur && cur.length ? cur[0].id : "";

		  if (lastId !== id) {
		    lastId = id;
		    // Set/remove active class
		    menuItems
		      .parent().removeClass("active")
		      .end().filter("[href='#" + id + "']").parent().addClass("active");
		  }
		});













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
    slidesToScroll: 3,
    asNavFor: '.furniture',
    centerMode: true,
    focusOnSelect: true,
    nextArrow: false,
    nextArrow: false,
    responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
  });
    
    








    
    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });
    
    
    
    $('.overlayMenu ul li a').on('click', function(){
      $('.overlay').removeClass('open');
      $("body").toggleClass("locked");
      $("#navToggle").toggleClass("active");
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