$(function() {

    var $compareModal = $('#compareModal');

    $compareModal.on('shown.bs.modal', function() {
        var skus = $compareModal.find('.sku-no');
        dataLayer.push({
            'event': 'sku.compare',
            'skus': $.map(skus, function(sku) {
                return $(sku).text();
            }).join(', ')
        });
    });

});