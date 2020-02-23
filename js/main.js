(function($) {
    "use strict";
    
    /*===========================================
    [Table of contents]
    1.window load functionality
    2.document ready load functionality
    3. scroll load functionality
    4. resize load functionality
    
    =============================================*/
    
    /* 1.window load functionality
    =============================================*/
    $(window).on('load', function() {
        
    }); 
        
    
    /* 2.document ready load functionality
    =============================================*/
    $(document).ready(function() {



        /*--------------------------
	menu jquery mobile code
	---------------------------- */
	$(function() {
		$('#menu').cookcodesmenu({
			brand: '<a href="index.html"><img src="images/logo.png"></a>'
		});
    });
    
        // Data images
        //----------------------------------
        if ($('.background-image').length > 0) {
            $('.background-image').each(function () {
                var src = $(this).attr('data-src');
                $(this).css({
                    'background-image': 'url(' + src + ')'
                });
            });
        }

        $.scrollUp({
            scrollText: '<i class="icofont-thin-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });

    /*--------------------------
		Sticky Menu Activation Code
	---------------------------- */		   
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>100 ){
			$('#header').addClass('stick');
			} else {
			$('#header').removeClass('stick');
		}
	});

    
        /* services slider active
        =================================================*/
        
        if ($('.services-slider.owl-carousel').length > 0) {
            $('.services-slider.owl-carousel').owlCarousel({
                loop: true,
                items: 3,
                autoplay: true,
                nav: false,
                dots: false,            
                margin: 30,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        center: false
                    },
                    480:{
                        items: 1,
                        center: false,
                        margin:0
                    },
                    600: {
                        items: 1,
                        center: false,
                        margin:0
                    },
                    768: {
                        items: 2,
                        center: false
                    },
                    992: {
                        items: 3
                        
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
        /*
        Circular Bars - Knob
        --------------------- */
        if(typeof($.fn.knob) != 'undefined') {
            $('.knob').each(function () {
                var $this = $(this),
                    knobVal = $this.attr('data-rel');   		
        
                $this.knob({
                'draw' : function () {
                    $(this.i).val(this.cv + '%')
                }
                });
                $this.appear(function() {
                $({
                    value: 0
                }).animate({
                    value: knobVal
                }, {
                    duration : 2000,
                    easing   : 'swing',
                    step     : function () {
                    $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
                }, {accX: 0, accY: -150});
            });
        }

        
    // image and video popup activation code
    //----------------------------------

    $('.popup-link').magnificPopup({
        type: 'image',
        gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0,1]
            },	
        });
        if ($('.video-popup').length > 0) {
          $('.video-popup').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
          });
      }
    
    // onepage nav menu activation code
    //----------------------------------
      if ($('#menu').length > 0) {
        $('#menu').onePageNav({
            scrollOffset: 70
        });
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    $("header .header-area .humberggum-menu a i").on("click", function () {
        $(".contact-form-area").addClass("show");
    });
    $(".contact-form-area i").on("click", function () {
        $(".contact-form-area").removeClass("show");
    });


    
    
    }); 
    
    /* 3. scroll load functionality
    =============================================*/
    $(window).on('scroll', function() {
    
    
    }); 
    
    
    /* 4. resize load functionality
    =============================================*/
    $(window).on('resize', function() {
    
    }); // End Resize
    
    })(jQuery);