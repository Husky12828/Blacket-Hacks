(() => {
  let maxBlooks = 0;
  Object.keys(blacket.packs).forEach((pack) => {
    Object.keys(blacket.packs[pack].blooks).forEach(blook => maxBlooks++);
  });
  $("#blooks").html(`${parseInt(prompt('How many blooks would you like?'))} / ${maxBlooks} `);
})();