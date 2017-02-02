/**
 * Обработка при загрузке страницы
 */
$(function() {

    $(window).scroll(function() {
        headerSize();
    });

    $(window).resize(function(event) {

    });

    $('.header').next().css('marginTop', $('.header').outerHeight());

    function headerSize() {
        if ($(window).scrollTop() > $('.header').outerHeight()) {
            $('.header').addClass('go');
        } else {
            $('.header').removeClass('go');
        }
    }

    $('.toggle-menu').on('click', function() {
        $(this).toggleClass('menu-open');
        $('.header__mobile-menu').toggleClass('menu-open');
    });

    $('a[href*=#].anchor').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 700);
        e.preventDefault();
    });

    // Добавляем маску к вводу телефона
    $("input[type='tel']").each(function() {
        $(this).mask("+7 (999) 999-9999");
    });

    var swiper = new Swiper('.main__slider', {
        pagination: '.main__slider-pagination',
        paginationClickable: true,
        effect: 'fade',
        speed: 600,
        autoplay: 4000,
        paginationBulletRender: function(swiper, index, className) {
            if (index < 9) {
                return '<span class="' + className + '">0' + (index + 1) + '</span>';
            } else {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        }
    });


    var offersSlider = new Swiper('.offers__slider', {
        pagination: '.g_slider__pagination',
        paginationClickable: true,
        nextButton: '.g_slider-button-next',
        prevButton: '.g_slider-button-prev',
        speed: 500,
        autoplay: 4000,
        onInit: function(swiper) {
            $(swiper.container[0]).find('.count').text(swiper.slides.length);
            $(swiper.container[0]).find('.num').text(swiper.activeIndex + 1);
        },
        onSlideChangeEnd: function(swiper) {
            $(swiper.container[0]).find('.num').text(swiper.activeIndex + 1);
            swiperSliderDesc.slideTo(swiper.realIndex, 500);
        },
    });

    var newsSlider = new Swiper('.news__slider', {
        pagination: '.g_slider__pagination',
        paginationClickable: true,
        nextButton: '.g_slider-button-next',
        prevButton: '.g_slider-button-prev',
        speed: 500,
        autoplay: 4000,
        onInit: function(swiper) {
            $(swiper.container[0]).find('.count').text(swiper.slides.length);
            $(swiper.container[0]).find('.num').text(swiper.activeIndex + 1);
        },
        onSlideChangeEnd: function(swiper) {
            $(swiper.container[0]).find('.num').text(swiper.activeIndex + 1);
        },
    });

    var swiperSliderDesc = new Swiper('.offers__descriptions', {
        effect: 'fade',
        speed: 500,
    });

    $('.problems__decision').accordion({
        active: false,
        collapsible: true,
        heightStyle: "content",
    });

    $('.services__left, .services__right').accordion();

    scaleProgress();
    $('.radio_block').on('click', function(event) {
        scaleProgress();
    });

    function scaleProgress() {
        $('.price__scale').each(function(index, el) {
            $(this).find('.radio_block').each(function(index, el) {
                $(this).parents('.price__scale').find('.radio_block').removeClass('active');
                if ($(this).find('input').prop('checked')) {
                    $(this).addClass('active');
                    $(this).parents('.price__scale').find('.price__scale_progress').width($(this).position().left)
                    return false;
                }
            });
        });
    }

    $('.format_num span').each(function(index, el) {
        $(this).text($(this).text().replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 "))
    });

    $('form input').focus(function(event) {
        $(this).parents('.form-input').addClass('focus')
    });
    $('form input').focusout(function(event) {
        $(this).parents('.form-input').removeClass('focus')
    });

    var aboutusSwiper = new Swiper('.aboutus__sertificate', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        effect: 'fade',
        paginationClickable: true,
        paginationBulletRender: function(swiper, index, className) {
            return '<span class="' + className + '"><img src="' + $(swiper.imagesToLoad[index]).attr('src') + '" alt=""></span>';
        }
    });

    var PhotoSwipeSert = new PhotoSwipeGen('.aboutus__sertificate', {
        history: false,
        focus: false,
        showHideOpacity: true,
        shareEl: false,
        fullscreenEl: false,
        bgOpacity: 0.4,
        getThumbBoundsFn: function(index) {
            var thumbnail = document.querySelectorAll('.ps-item')[index];
            var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            var rect = thumbnail.getBoundingClientRect();
            return {
                x: rect.left,
                y: rect.top + pageYScroll,
                w: rect.width
            };
        }
    });

    var reviewsSwiper = new Swiper('.reviews__slider', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        slidesPerGroup: 2,
        paginationClickable: true,
        nextButton: '.g_slider-button-next',
        prevButton: '.g_slider-button-prev',
        speed: 500,
        autoplay: 4000,
        spaceBetween: 150,
        autoHeight: true
    });

    if ($('#map_canvas').length) {
        mapInitialize();
    }

    if ($('.parthners__items').length) {
        var mixer = mixitup('.parthners__items', {
            selectors: {
                target: '.parthners__item'
            },
        });
    }

    $('.organization').tabs({
        hide: {
            effect: "drop",
            duration: 400
        },
        show: {
            effect: "fade",
            duration: 600
        },
    });
});

var PhotoSwipeGen = function(parentslide, options) {
    PhotoSwipeItems = [];
    $(window).on('load', function() {
        $(parentslide).find('.ps-item').each(function(index, el) {
            var item = $(this);
            var img = new Image();
            img.src = $(this).attr('href');
            img.onload = function() {
                item.attr('data-size', img.width + 'x' + img.height);
            };
            PhotoSwipeItems[index] = {
                id: index,
                src: $(this).attr('href'),
                w: img.width,
                h: img.height,
            }
        }).on('click', function(event) {
            event.preventDefault();
            var pswpElement = document.querySelectorAll('.pswp')[0];
            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, PhotoSwipeItems, options);
            gallery.init();
        });
    });
}

function mapInitialize() {

    var brooklyn = new google.maps.LatLng(59.92860856, 30.30128850);

    var stylez = [{
        featureType: "all",
        elementType: "all",
        //  stylers: [
        // { saturation: -100 } // <-- THIS
        //  ]
    }];

    var mapOptions = {
        zoom: 16,
        center: brooklyn,
        mapTypeControl: false,
        scrollwheel: false,
        navigationControl: false,
        scaleControl: false,
        draggable: true,
    };

    if ($(window).width() <= 1180) {
        mapOptions.draggable = false;
    }

    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: brooklyn,
        title: "Мы находимся тут!"
    });
}