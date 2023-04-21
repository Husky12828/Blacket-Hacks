(() => {
  blacket.requests.get(`/worker/user/${prompt('Enter someone\'s username...')}`, (res) => {
    if (res.error) return alert(res.reason);
    let friend = res.user;
    blacket.friends.friends.push(friend);
    $(".styles__friendsContainer___kRk3a-camelCase").append(`
      <div id="${friend.id}" class="styles__friendsFriend___rj42a-camelCase">
        <img src="${friend.banner}">
        <div class="styles__friendsUsername___904Ca-camelCase${friend.color == "rainbow" ? " rainbow" : ""}" style="color: ${friend}">${friend.username}</div>
        <div class="styles__friendsRole___vma3A-camelCase">${friend.role}</div>
        <img class="styles__friendsAvatar___mvaW3-camelCase" src="${friend.avatar}">
      </div>
    `);
    $(`#${friend.id}`).click(() => {
      blacket.getUser(friend.username);
    });
  })
})();