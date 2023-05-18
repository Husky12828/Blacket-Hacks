(async () => {
  if (!blacket.blooks) return alert(`You must be on the Market or Blooks pages to run this script.`);
  if (!confirm('Do you actually want to sell all of your duplicate blooks?')) return alert(`Cancelled script.`);

  let tosell = {};

  Object.keys(blacket.blooks).forEach((blook) => {
    if (Object.keys(blacket.user.blooks).includes(blook)) {
      qnt = blacket.user.blooks[blook] - 1;
      if (qnt == 0) return;
      tosell[blook] = qnt;
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
