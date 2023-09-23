(async () => {
    if (location.pathname !== '/blooks') return alert('You must be on the Blooks page to run this script.');

    blacket.startLoading();
    document.getElementsByClassName('styles__blooksHolder___3qZR1-camelCase')[0].replaceChildren();

    let selected = blacket.blooks.selected;
    Object.keys(blacket.blooks).forEach(blook => {
        let math = Math.floor(blacket.blooks[blook].chance * Math.round(Math.random() * 100));
        if (math == 0) blacket.user.blooks[blook] = 1;
        else blacket.user.blooks[blook] = math;
    });
    blacket.blooks.selected = selected;

    blacket.packBlooks = [];
    blacket.requests.get('/worker/packs', (data) => {
        blacket.packs = data.packs;
        Object.keys(blacket.packs).reverse().forEach((pack) => {
            if (blacket.packs[pack].hidden) return;
            let packId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
            $('.styles__blooksHolder___3qZR1-camelCase').append(`<div class='styles__setHolder___rVq3Z-camelCase'><div class='styles__setTop___wIaVS-camelCase'><div class='styles__setTopBackground___342Wr-camelCase' style='background-image: url('/content/blookTile.png');'></div><div class='styles__setText___1PQLQ-camelCase'>${pack} Pack</div><div class='styles__setDivider___3da0c-camelCase'></div></div><div id='${packId}' class='styles__setBlooks___3xamH-camelCase'></div></div>`);
            Object.entries(blacket.packs[pack].blooks).forEach((blook) => {
                blacket.packBlooks.push(blook[1]);
                let quantity;
                if (blacket.rarities[blacket.blooks[blook[1]].rarity].color == 'rainbow') quantity = `<div class='styles__blookText___3AMdK-camelCase' style='background-image: url('/content/rainbow.gif');'>${blacket.user.blooks[blook[1]].toLocaleString()}</div></div>`;
                else quantity = `<div class='styles__blookText___3AMdK-camelCase' style='background-color: ${blacket.rarities[blacket.blooks[blook[1]].rarity].color};'>${blacket.user.blooks[blook[1]].toLocaleString()}</div></div>`;
                locked = {
                    class: ``,
                    i: ``,
                    quantity: quantity,
                    cursor: 'pointer'
                };
                $(`#${packId}`).append(`<div id='${blook[1].replaceAll(' ', '-').replaceAll('\'', '_')}' class='styles__blookContainer___3JrKb-camelCase' style='cursor: ${locked.cursor}' role='button' tabindex='0'><div class='styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase ${locked.class}'><img loading='lazy' src='${blacket.blooks[blook[1]].image}' draggable='false' class='styles__blook___1R6So-camelCase' /></div>${locked.i}${locked.quantity}`);
                $(`#${blook[1].replaceAll(' ', '-').replaceAll('\'', '_')}`).click(function() {
                    if (this.children[0].classList.contains(`styles__lockedBlook___3oGaX-camelCase`)) return;
                    blacket.selectBlook(blook[1]);
                });
            });
        });
    });

    setTimeout(() => {
        let uncatogorizedBlooks = [];
        Object.keys(blacket.user.blooks).forEach(blook => {
            if (!blacket.packBlooks.includes(blook) && blacket.blooks[blook]) uncatogorizedBlooks.push(blook);
        });

        if (uncatogorizedBlooks.length > 0) {
            let packId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
            $('.styles__blooksHolder___3qZR1-camelCase').append(`<div class='styles__setHolder___rVq3Z-camelCase'><div class='styles__setTop___wIaVS-camelCase'><div class='styles__setTopBackground___342Wr-camelCase' style='background-image: url('/content/blookTile.png');'></div><div class='styles__setText___1PQLQ-camelCase'>Miscellaneous</div><div class='styles__setDivider___3da0c-camelCase'></div></div><div id='${packId}' class='styles__setBlooks___3xamH-camelCase'></div></div>`);
            uncatogorizedBlooks.forEach(blook => {
                if (!blacket.blooks[blook] || blook === 'selected') return;
                let quantity;
                if (blacket.rarities[blacket.blooks[blook].rarity] && blacket.rarities[blacket.blooks[blook].rarity].color == 'rainbow') quantity = `<div class='styles__blookText___3AMdK-camelCase' style='background-image: url('/content/rainbow.gif');'>${blacket.user.blooks[blook].toLocaleString()}</div></div>`;
                else quantity = `<div class='styles__blookText___3AMdK-camelCase' style='background-color: ${blacket.rarities[blacket.blooks[blook].rarity].color};'>${blacket.user.blooks[blook].toLocaleString()}</div></div>`;
                $(`#${packId}`).append(`<div id='${blook.replaceAll(' ', '-').replaceAll('\'', '_')}' class='styles__blookContainer___3JrKb-camelCase' style='cursor: pointer' role='button' tabindex='0'><div class='styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase'><img loading='lazy' src='${blacket.blooks[blook].image}' draggable='false' class='styles__blook___1R6So-camelCase' /></div>${quantity}`);
                $(`#${blook.replaceAll(' ', '-').replaceAll('\'', '_')}`).click(function() {
                    blacket.selectBlook(blook);
                });
            });
        };

        blacket.selectBlook(blacket.blooks.selected);
    }, 2000);

    blacket.sellBlook = (quantity) => {
        if (quantity == `` || quantity == 0) return;
        $(`.arts__modal___VpEAD-camelCase`).remove();
        blacket.user.blooks[blacket.blooks.selected] -= quantity;
        if (blacket.user.blooks[blacket.blooks.selected] < 1) {
            $(`#${blacket.blooks.selected.replaceAll(' ', '-').replaceAll('\'', '_')} > div:nth-child(2)`).remove();
            $(`#${blacket.blooks.selected.replaceAll(' ', '-').replaceAll('\'', '_')}`).append(`<i class='fas fa-lock styles__blookLock___3Kgua-camelCase' aria-hidden='true'></i>`);
            $(`#${blacket.blooks.selected.replaceAll(' ', '-').replaceAll('\'', '_')}`).attr('style', 'cursor: auto;');
            $(`#${blacket.blooks.selected.replaceAll(' ', '-').replaceAll('\'', '_')} > div:nth-child(1)`).attr('class', 'styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase styles__lockedBlook___3oGaX-camelCase');
            delete blacket.user.blooks[blacket.blooks.selected];
            blacket.blooks.selected = Object.keys(blacket.user.blooks)[Math.floor(Math.random() * Object.keys(blacket.user.blooks).length)];
        } else $(`#${blacket.blooks.selected.replaceAll(' ', '-').replaceAll('\'', '_')} > div:nth-child(2)`).html(blacket.user.blooks[blacket.blooks.selected].toLocaleString());
        blacket.selectBlook(blacket.blooks.selected);
    };

    blacket.listBlook = (price) => {
        if (price == `` || price == 0) return;
        $(`.arts__modal___VpEAD-camelCase`).remove();
        blacket.user.blooks[blacket.blooks.selected] -= 1;
        if (blacket.user.blooks[blacket.blooks.selected] < 1) {
            $(`#${blacket.blooks.selected.replaceAll(' ', '-').replaceAll('\'', '_')} > div:nth-child(2)`).remove();
            $(`#${blacket.blooks.selected.replaceAll(' ', '-').replaceAll('\'', '_')}`).append(`<i class='fas fa-lock styles__blookLock___3Kgua-camelCase' aria-hidden='true'></i>`);
            $(`#${blacket.blooks.selected.replaceAll(' ', '-').replaceAll('\'', '_')}`).attr('style', 'cursor: auto;');
            $(`#${blacket.blooks.selected.replaceAll(' ', '-').replaceAll('\'', '_')} > div:nth-child(1)`).attr('class', 'styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase styles__lockedBlook___3oGaX-camelCase');
            delete blacket.user.blooks[blacket.blooks.selected];
            blacket.blooks.selected = Object.keys(blacket.user.blooks)[Math.floor(Math.random() * Object.keys(blacket.user.blooks).length)];
        } else $(`#${blacket.blooks.selected.replaceAll(' ', '-').replaceAll('\'', '_')} > div:nth-child(2)`).html(blacket.user.blooks[blacket.blooks.selected].toLocaleString());
        blacket.selectBlook(blacket.blooks.selected);
    }
    blacket.stopLoading();
})();