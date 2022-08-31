$(function() {

    $('.list-retailer a').click(function() {
        if ($(this).hasClass('btn')) {
            dataLayer.push({
                'event': 'retailer.getDirection',
                'retailer': {
                    'name': $(this).parent().parent().find('.title-sm').text(),
                }
            });
        } else {
            dataLayer.push({
                'event': 'retailer.visitWeb',
                'retailer': {
                    'name': $(this).parent().siblings('.title-sm').text(),
                    'url': $(this).attr('href')
                }
            });
        }
    });

    $('.store-details').on('mapMouseOver', function(event) {
        dataLayer.push({
            'event': 'retailer.mapHover',
            'retailer': {
                'name': $(event.target).find('.title-sm').text().trim()
            }
        });
    });

});