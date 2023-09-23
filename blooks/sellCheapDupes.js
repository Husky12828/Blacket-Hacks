(async () => {
    if (!blacket.blooks) return alert(`You must be on the Market or Blooks pages to run this script.`);
    if (!confirm('Do you actually want to sell all of your cheap duplicate blooks?')) return alert(`Cancelled script.`);
    let sellLeg = confirm(`Sell Legendaries?\nClick OK to sell Legendaries.\nClick CANCEL to skip Legendaries.`)

    let tosell = {};

    Object.keys(blacket.blooks).forEach((blook) => {
        if (Object.keys(blacket.user.blooks).includes(blook)) {
            qnt = blacket.user.blooks[blook] - 1;
            if (qnt == 0) return;
            if (blacket.blooks[blook].rarity == 'Uncommon' || blacket.blooks[blook].rarity == 'Rare' || blacket.blooks[blook].rarity == 'Epic') tosell[blook] = qnt;
            if (blacket.blooks[blook].rarity == 'Legendary' && sellLeg) tosell[blook] = qnt;
        };
    });

    function sell(blook, amount) {
        blacket.requests.post("/worker/sell", {
            blook: blook,
            quantity: amount
        }, (res) => {
            if (res.error) return;
            console.log(`Sold ${amount}x ${blook}`);
            delete tosell[blook];
        });
    };

    setInterval(() => {
        sell(Object.keys(tosell)[0], Object.values(tosell)[0]);
    }, 150);
})();