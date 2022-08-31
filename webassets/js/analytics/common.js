var dataLayer = dataLayer || [];

$(function() {

    $('.language-select a.dropdown-item').click(function() {
        dataLayer.push({
            'event': 'langSelect',
            'langSelect': {
                'label': $(this).text().trim(),
            }
        });
    });

    var scrollTriggers = $.map([
        0.5, 0.75, 1
    ], function(trigger) {
        return {
            'trigger': trigger,
            'hit': false
        }
    });

    $(window).scroll(function() {
        var scrollPercent = $(window).scrollTop() / ($(document).height() - $(window).height());
        for (var i = 0; i < scrollTriggers.length; i++) {
            if (scrollPercent >= scrollTriggers[i].trigger && !scrollTriggers[i].hit) {
                scrollTriggers[i].hit = true;
                dataLayer.push({
                    'event': 'scrollDepth',
                    'scrollDepth': {
                        'depth': scrollTriggers[i].trigger
                    }
                })
            }
        }
    });

    $navSupportNumbers = $('.navbar .nav-contact-support a[href^="tel:"]');
    $navSupportNumbers.click(function() {
        var callTarget = $navSupportNumbers.index($(this)) === 0 ? 'callCentre' : 'customerCare';
        dataLayer.push({
            'event': 'contact.callNumber',
            'contact': {
                'target': callTarget,
                'number': $(this).attr('href').replace('tel:', ''),
                'label': $(this).text().trim(),
                'source': 'nav'
            }
        });
    });

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

});