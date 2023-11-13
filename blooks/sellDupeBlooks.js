(async () => {
    if (!blacket.blooks) return alert(`You must be on the Market or Blooks pages to run this script.`);
    if (!confirm('Do you actually want to sell all of your duplicate blooks?')) return alert(`Cancelled script.`);

    let pendingSale = {};

    Object.keys(blacket.blooks).forEach((blook) => {
        if (Object.keys(blacket.user.blooks).includes(blook)) {
            qnt = blacket.user.blooks[blook] - 1;
            if (qnt == 0) return;
            pendingSale[blook] = qnt;
        };
    });

    let sellInterval = setInterval(() => {
        if (Object.keys(pendingSale).length == 0) return clearInterval(sellInterval);
        blacket.requests.post('/worker/sell', {
            blook: Object.keys(pendingSale)[0],
            quantity: Object.values(pendingSale)[0]
        }, (res) => {
            if (res.error) return;
            console.log(`Sold ${amount}x ${blook}`);
            delete pendingSale[blook];
        });
    }, 150);
})();