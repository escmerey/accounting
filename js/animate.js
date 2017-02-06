jQuery(document).ready(function($) {
    $('.header').addClass('wow fadeInDown').attr({
        'data-wow-duration': '1s',
    });

    $('.main').addClass('wow fadeIn').attr({
        'data-wow-duration': '1s',
        'data-wow-delay': '0.5s'
    });

    $('.offers').addClass('wow fadeInDownSmall').attr({
        'data-wow-duration': '1.5s',
    });

    $('.news__right').addClass('wow fadeInRightSmall').attr({
        'data-wow-duration': '1.5s',
        'data-wow-delay': '0.5s'
    });

    $('.news .caption').addClass('wow fadeIn').attr({
        'data-wow-duration': '1s',
    });

    $('.news__block').each(function(index, el) {
        $(this).addClass('wow fadeInDown').attr({
            'data-wow-duration': '1s',
            'data-wow-delay': 0.5 + (0.2 * index) + 's'
        });
    });

    $('.blog__items').each(function(index, el) {
        $(this).children(':nth-child(3n+1)').addClass('wow fadeInLeftSmall');
        $(this).children(':nth-child(3n+2)').addClass('wow fadeInDownSmall');
        $(this).children(':nth-child(3n)').addClass('wow fadeInRightSmall');
        $(this).children('.blog__item').each(function(index, el) {
            $(this).attr({
                'data-wow-delay': 0.5 + (0.2 * index) + 's',
                'data-wow-duration': '1s',
            });
        });
    });



    $('.scope__items').each(function(index, el) {
        $(this).children(':nth-child(3n+1)').addClass('wow fadeInLeftSmall');
        $(this).children(':nth-child(3n+2)').addClass('wow fadeInDownSmall');
        $(this).children(':nth-child(3n)').addClass('wow fadeInRightSmall');
        $(this).children('.scope__item').each(function(index, el) {
            $(this).attr({
                'data-wow-delay': 0.5 + (0.2 * index) + 's',
                'data-wow-duration': '1s',
            });
        });
    });

    $('.estimate, .competitive').addClass('wow fadeInDownSmall').attr({
        'data-wow-duration': '1.5s',
    });

    $('.problems__item').each(function(index, el) {
        $(this).addClass('wow fadeInDown').attr({
            'data-wow-duration': '1s',
            'data-wow-delay': (0.2 * index) + 's'
        });
    });

    $('.causes__items').each(function(index, el) {
        $(this).children(':nth-child(3n+1)').addClass('wow fadeInLeftSmall');
        $(this).children(':nth-child(3n+2)').addClass('wow fadeInDownSmall');
        $(this).children(':nth-child(3n)').addClass('wow fadeInRightSmall');
        $(this).children('.causes__item').each(function(index, el) {
            $(this).attr({
                'data-wow-delay': (0.2 * index) + 's',
                'data-wow-duration': '1s',
            });
        });
    });

    $('.services__item').each(function(index, el) {
        $(this).addClass('wow fadeInLeft').attr({
            'data-wow-duration': '1s',
            'data-wow-delay': (0.13 * index) + 's'
        });
    });

    $('.suitable__left').addClass('wow fadeInDown').attr({
        'data-wow-duration': '2s',
    });

    $('.suitable__img').addClass('wow fadeIn').attr({
        'data-wow-duration': '1s',
        'data-wow-delay': '0.5s'
    });

    $('.aboutus__left').addClass('wow fadeInLeftSmall').attr({
        'data-wow-duration': '1.5s',
    });

    $('.aboutus__massmed').each(function(index, el) {
        $(this).addClass('wow fadeInDownSmall').attr({
            'data-wow-duration': '1s',
            'data-wow-delay': 0.5 + (0.1 * index) + 's'
        });
    });

    $('.parthners__item').each(function(index, el) {
        $(this).addClass('wow flipInY').attr({
            'data-wow-duration': '1s',
            'data-wow-delay': 0.5 + (0.3 * index) + 's'
        });
    });

    $('.thebest__right li').each(function(index, el) {
        $(this).addClass('wow fadeInRight').attr({
            'data-wow-duration': '1s',
            'data-wow-delay': (0.3 * index) + 's'
        });
    });

    $('.agreement__left div').each(function(index, el) {
        $(this).addClass('wow fadeInDownSmall').attr({
            'data-wow-duration': '1s',
            'data-wow-delay': (0.18 * index) + 's'
        });
    });

    $('.support ul').each(function(index, el) {
        $(this).children(':nth-child(3n+1)').addClass('wow fadeInLeftSmall');
        $(this).children(':nth-child(3n+2)').addClass('wow fadeInDownSmall');
        $(this).children(':nth-child(3n)').addClass('wow fadeInRightSmall');
        $(this).children('li').each(function(index, el) {
            $(this).attr({
                'data-wow-delay': (0.2 * index) + 's',
                'data-wow-duration': '1s',
            });
        });
    });

    $('.included__left').addClass('wow fadeInDownSmall').attr({
        'data-wow-duration': '1.5s',
    });

    $('.included__right').each(function(index, el) {
        $(this).children().addClass('wow fadeInDown').each(function(index, el) {
            $(this).attr({
                'data-wow-delay': (0.2 * index) + 's',
                'data-wow-duration': '1s',
            });
        });
    });

    $('.youget__item').each(function(index, el) {
        $(this).addClass('wow fadeInUpSmall').attr({
            'data-wow-duration': '1s',
            'data-wow-delay': (0.3 * index) + 's'
        });
    });

    $('.budgeting__left').each(function(index, el) {
        $(this).children().addClass('wow fadeInDown').each(function(index, el) {
            $(this).attr({
                'data-wow-delay': (0.2 * index) + 's',
                'data-wow-duration': '1s',
            });
        });
    });

    $('.conduct__items').each(function(index, el) {
        $(this).children(':nth-child(3n+1)').addClass('wow fadeInLeftSmall');
        $(this).children(':nth-child(3n+2)').addClass('wow fadeInDownSmall');
        $(this).children(':nth-child(3n)').addClass('wow fadeInRightSmall');
        $(this).children('.conduct__item').each(function(index, el) {
            $(this).attr({
                'data-wow-delay': (0.2 * index) + 's',
                'data-wow-duration': '1s',
            });
        });
    });

    $('.result').each(function(index, el) {
        $(this).find('.result__item').addClass('wow fadeInDown').each(function(index, el) {
            $(this).attr({
                'data-wow-delay': (0.2 * index) + 's',
                'data-wow-duration': '1s',
            });
        });
    });


    wow = new WOW({
        offset: 150, // default
        mobile: false, // default
    })
    wow.init();
});

// 'data-wow-delay': '0'