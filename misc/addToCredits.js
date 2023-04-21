(() => {
  let desc = prompt('Enter the description [what you did for Blacket]:')
  let index = prompt('Who would you like to have your name after? Enter "top" for your name to appear at the top.');
  if (index === 'top') {
    $('.styles__topStats___3qffP-camelCase').children(':first').prepend(`
        <a href="/stats?name=${blacket.user.id}" style="text-decoration: underline; color: white;">${blacket.user.username}</a>
        <br>
        <text style="font-size: 20px;">${desc}</text>
        <br>
      `)
    return
  }

  let children = $('.styles__topStats___3qffP-camelCase').children()[0].children;
  let indexing = Array.prototype.indexOf.call(children, $(`a:contains('${index}')`)[0]);
  let appendAfter = children[indexing + 3];
  $(`
    <a href="/stats?name=${blacket.user.id}" style="text-decoration: underline; color: white;">${blacket.user.username}</a>
    <br>
    <text style="font-size: 20px;">${desc}</text>
    <br>
  `).insertAfter(appendAfter);
})();