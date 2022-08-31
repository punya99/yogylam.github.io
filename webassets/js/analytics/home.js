$(function() {

    var $homeCarousel = $('.default-carousel');
    var $homeProdCatTabs = $('.prdt-cat-tab');

    dataLayer.push({
        'event': 'homeCarousel.impression',
        'carousel': {
            'index': 0,
            'position': 1,
            'headline': $($homeCarousel.slick('getSlick').$slides.get(0)).find('h1').text()
        }
    });

    dataLayer.push({
        'event': 'homeProdCatTabs.impression',
        'tabs': {
            'index': 0,
            'position': 1,
            'title': $($homeProdCatTabs.find('.nav-item')[0]).text().trim()
        }
    });

    $homeCarousel
        .on('afterChange', function(slick, currentSlide) {
            dataLayer.push({
                'event': 'homeCarousel.impression',
                'carousel': {
                    'index': currentSlide.currentSlide,
                    'position': currentSlide.currentSlide + 1,
                    'headline': $(currentSlide.$slides.get(currentSlide.currentSlide)).find('h1').text()
                }
            });
        });

    $homeCarousel.find('.slick-slide a, .slick-slide button').click(function() {
        if ($(this).data('bs-target') === '#videoModal') {
            dataLayer.push({
                'event': 'homeCarousel.viewVideo',
                'carousel': {
                    'cta': {
                        'url': $(this).data('src'),
                        'label': $(this).text().trim()
                    }
                }
            });
        } else {
            dataLayer.push({
                'event': 'homeCarousel.click',
                'carousel': {
                    'cta': {
                        'url': $(this).attr('href'),
                        'label': $(this).text().trim()
                    }
                }
            });
        }
    });

    $homeCarousel.find('.slick-dots button').click(function() {
        dataLayer.push({
            'event': 'homeCarousel.navJump',
            'carousel': {
                'fromIndex': $homeCarousel.slick('slickCurrentSlide'),
                'fromPosition': $homeCarousel.slick('slickCurrentSlide') + 1,
                'toIndex': $(this).parent().index(),
                'toPosition': $(this).parent().index() + 1
            }
        });
    });


    $homeProdCatTabs.on('shown.bs.tab', function(e) {
        var $tab = $(e.target);
        dataLayer.push({
            'event': 'homeProdCatTabs.impression',
            'tabs': {
                'index': $tab.parent().index(),
                'position': $tab.parent().index() + 1,
                'title': $tab.text().trim()
            }
        });
    });

});