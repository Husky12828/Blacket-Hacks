(() => {
  let title = prompt('Enter a news title:\nLeave blank for no title.');
  let img = prompt('Enter a news image link:\nLeave blank for no image.');
  let desc = prompt('Enter a news description:\nLeave blank for no description.');
  
  let isValid = (value) => {
    if (!value || value.replaceAll(' ', '') === '') return false;
    return true;
  };

  $(`.styles__postsContainer___39_IQ-camelCase`).prepend(`
    <div class="styles__cardContainer___NGmjp-camelCase">
      <div class="styles__header___kLT5x-camelCase">${title || 'No title...'}</div>
      ${isValid(img) ? '<img loading="lazy" src="' + img + '" onerror="this.remove()" class="styles__image___2uoLV-camelCase" draggable="false">' : ''}
      ${isValid(desc) ? '<div class="styles__text___1L6DW-camelCase">' + desc + '</div>' : ''}
      <div class="styles__dateRow___1jkQT-camelCase">
        <i class="far fa-calendar-alt" style="margin-right: 7px;" aria-hidden="true"></i>
        ${new Date(Date.now()).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
      </div>
    </div>`)
})();