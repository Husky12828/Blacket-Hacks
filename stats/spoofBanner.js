(() => {
    $('.styles__headerBanner___3Uuuk-camelCase').unbind('click')
    $('.styles__headerBanner___3Uuuk-camelCase').click(() => {
        $('body').append(`<div class='arts__modal___VpEAD-camelCase'><div class='styles__editHeaderContainer___2G1ji-camelCase'><div class='styles__editHeaderColumn___2ye6v-camelCase'></div></div></div>`);
        Object.keys(blacket.banners).forEach((banner) => {
            $('.styles__editHeaderColumn___2ye6v-camelCase').append(`<div id='${banner.replaceAll(' ', '-').replaceAll('\'', '_')}' class='styles__editBanner___vkKiZ-camelCase' role='button' tabindex='0'><img loading='lazy' src='${blacket.banners[banner].image}' class='styles__editBannerImg___2eCH9-camelCase' draggable='false'></div>`);
            $(`#${banner.replaceAll(' ', '-').replaceAll('\'', '_')}`).click(() => {
                $('.arts__modal___VpEAD-camelCase').remove();
                $('.styles__headerBg___12ogR-camelCase').attr('src', blacket.banners[banner].image);
            });
        });
        $('.arts__modal___VpEAD-camelCase').click(() => {
            $('.arts__modal___VpEAD-camelCase').remove();
        });
    });
})();