(() => {
    $('.styles__headerBlookContainer___36zY5-camelCase').unbind('click')
    $('.styles__headerBlookContainer___36zY5-camelCase').click(() => {
        $('#app > div').append(`<div class='arts__modal___VpEAD-camelCase'><div class='styles__container___3St5B-camelCase'><div class='styles__blooksHolder___1skET-camelCase'></div></div></div>`);
        $('.arts__modal___VpEAD-camelCase').click(() => {
            $('.arts__modal___VpEAD-camelCase').remove();
        });
        Object.keys(blacket.blooks).forEach((blook) => {
            $('.styles__blooksHolder___1skET-camelCase').append(`<div id='${blook.replaceAll(' ', '-').replaceAll('\'', '_')}' class='styles__blookContainer___hvHJM-camelCase' role='button' tabindex='0'><div class='styles__blookContainer___36LK2-camelCase styles__blook___3FnM0-camelCase'><img loading='lazy' src='${blacket.blooks[blook].image}' alt='${blook}' draggable='false' class='styles__blook___1R6So-camelCase'></div></div>`);
            $(`#${blook.replaceAll(' ', '-').replaceAll('\'', '_')}`).click(() => {
                blacket.setBlook(blook);
            });
        });
    });
})();