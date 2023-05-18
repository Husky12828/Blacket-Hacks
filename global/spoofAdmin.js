(function() {
  document.getElementsByClassName('styles__profileRow___cJa4E-camelCase')[0].children[1].classList.add('rainbow');
  src = prompt('Enter a profile picture:\nLeave blank for a rainbow Blacket logo.')
  Array.from(document.getElementsByClassName('styles__blook___1R6So-camelCase')).forEach(a => a.src = src || 'https://legacy.blacket.org/images/blacketImageRainbow.gif');
  blacket.startLoading();

  if (!document.getElementsByClassName('styles__pageButton___1wFuu-camelCase')[8]) $(`<a class="styles__pageButton___1wFuu-camelCase"><i class="styles__pageIcon___3OSy9-camelCase fas fa-wrench" aria-hidden="true"></i><div class="styles__pageText___1eo7q-camelCase">Panel</div></a>`).insertBefore(document.getElementsByClassName('styles__pageButton___1wFuu-camelCase')[6]);

  if (location.pathname === '/stats') {
    document.getElementsByClassName('styles__headerTitle___24Ox2-camelCase')[0].innerHTML = 'Admin';
    document.getElementsByClassName('styles__headerName___1GBcl-camelCase')[0].classList.add('rainbow');
    document.getElementsByClassName('styles__headerBanner___3Uuuk-camelCase')[0].children[0].src = 'https://blacket.org/content/banners/Rainbow.gif';

    document.getElementsByClassName('styles__levelBarInside___3FLAG-camelCase').style = 'transform: scaleX(1);';
    document.getElementsByClassName('styles__levelStarText___2Myxg-camelCase')[0].innerHTML = '∞';

    document.getElementsByClassName('styles__headerBadges___ffKa4-camelCase')[0].remove();
    $(`<div class="styles__headerBadges___ffKa4-camelCase" style="position: absolute;margin-left: 290px;display: inline-block;padding: 2.5px;"><img loading="lazy" class="styles__headerBadgeBg___12ogR-camelCase" draggable="false" src="/content/banners/Default.png"><div id="Ankh" style="display: inline-block; z-index: 10; cursor: pointer; margin-right: 2px;"><img loading="lazy" src="/content/badges/Ankh.png" style="width: 30px;display: inline-block; margin-left: 2.5px;"></div><div id="Booster" style="display: inline-block; z-index: 10; cursor: pointer; margin-right: 2px;"><img loading="lazy" src="/content/badges/Booster.png" style="width: 30px;display: inline-block; margin-left: 2.5px;"></div><div id="OG" style="display: inline-block; z-index: 10; cursor: pointer; margin-right: 2px;"><img loading="lazy" src="/content/badges/OG.png" style="width: 30px;display: inline-block; margin-left: 2.5px;"></div><div id="Owner" style="display: inline-block; z-index: 10; cursor: pointer; margin-right: 2px;"><img loading="lazy" src="/content/badges/Owner.png" style="width: 30px;display: inline-block; margin-left: 2.5px;"></div><div id="PBE" style="display: inline-block; z-index: 10; cursor: pointer; margin-right: 2px;"><img loading="lazy" src="/content/badges/PBE.png" style="width: 30px;display: inline-block; margin-left: 2.5px;"></div><div id="Plus" style="display: inline-block; z-index: 10; cursor: pointer; margin-right: 2px;"><img loading="lazy" src="/content/badges/Plus.png" style="width: 30px;display: inline-block; margin-left: 2.5px;"></div><div id="Staff" style="display: inline-block; z-index: 10; cursor: pointer; margin-right: 2px;"><img loading="lazy" src="/content/badges/Staff.png" style="width: 30px;display: inline-block; margin-left: 2.5px;"></div><div id="Tester" style="display: inline-block; z-index: 10; cursor: pointer; margin-right: 2px;"><img loading="lazy" src="/content/badges/Tester.png" style="width: 30px;display: inline-block; margin-left: 2.5px;"></div><div id="Verified" style="display: inline-block; z-index: 10; cursor: pointer; margin-right: 2px;"><img loading="lazy" src="/content/badges/Verified.png" style="width: 30px;display: inline-block; margin-left: 2.5px;"></div></div>`).insertBefore('.styles__levelBarContainer___1xi-9-camelCase');

    document.getElementsByClassName('styles__statNum___5RYSd-camelCase')[0].innerHTML = '∞';
    document.getElementsByClassName('styles__statNum___5RYSd-camelCase')[1].innerHTML = document.getElementsByClassName('styles__statNum___5RYSd-camelCase')[1].innerHTML.split(' / ')[1] + ' / ' + document.getElementsByClassName('styles__statNum___5RYSd-camelCase')[1].innerHTML.split(' / ')[1];
    document.getElementsByClassName('styles__statNum___5RYSd-camelCase')[2].innerHTML = '69420';
    document.getElementsByClassName('styles__statNum___5RYSd-camelCase')[3].innerHTML = '69420';
  } else if (location.pathname === '/market') {
    document.getElementById('tokenBalance').innerHTML = '∞';
  } else if (location.pathname === '/blooks') {
    // start of spoof blooks
    document.getElementsByClassName('styles__blooksHolder___3qZR1-camelCase')[0].replaceChildren();

    let selected = blacket.blooks.selected;
    Object.keys(blacket.blooks).forEach(blook => {
      let math = Math.floor(blacket.blooks[blook].chance * Math.round(Math.random() * 100));
      if (math == 0) blacket.user.blooks[blook] = 1;
      else blacket.user.blooks[blook] = math;
    });
    blacket.blooks.selected = selected;

    blacket.packBlooks = [];
    blacket.requests.get("/worker/packs", (data) => {
      blacket.packs = data.packs;
      Object.keys(blacket.packs).reverse().forEach((pack) => {
        if (blacket.packs[pack].hidden) return;
        let packId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
        $(".styles__blooksHolder___3qZR1-camelCase").append(`<div class="styles__setHolder___rVq3Z-camelCase"><div class="styles__setTop___wIaVS-camelCase"><div class="styles__setTopBackground___342Wr-camelCase" style="background-image: url('/content/blookTile.png');"></div><div class="styles__setText___1PQLQ-camelCase">${pack} Pack</div><div class="styles__setDivider___3da0c-camelCase"></div></div><div id="${packId}" class="styles__setBlooks___3xamH-camelCase"></div></div>`);
        Object.entries(blacket.packs[pack].blooks).forEach((blook) => {
          blacket.packBlooks.push(blook[1]);
          let quantity;
          if (blacket.rarities[blacket.blooks[blook[1]].rarity].color == "rainbow") quantity = `<div class="styles__blookText___3AMdK-camelCase" style="background-image: url('/content/rainbow.gif');">${blacket.user.blooks[blook[1]].toLocaleString()}</div></div>`;
          else quantity = `<div class="styles__blookText___3AMdK-camelCase" style="background-color: ${blacket.rarities[blacket.blooks[blook[1]].rarity].color};">${blacket.user.blooks[blook[1]].toLocaleString()}</div></div>`;
          locked = {
            class: ``,
            i: ``,
            quantity: quantity,
            cursor: 'pointer'
          };
          $(`#${packId}`).append(`<div id="${blook[1].replaceAll(' ', '-').replaceAll("'", "_")}" class="styles__blookContainer___3JrKb-camelCase" style="cursor: ${locked.cursor}" role="button" tabindex="0"><div class="styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase ${locked.class}"><img loading="lazy" src="${blacket.blooks[blook[1]].image}" draggable="false" class="styles__blook___1R6So-camelCase" /></div>${locked.i}${locked.quantity}`);
          $(`#${blook[1].replaceAll(' ', '-').replaceAll("'", "_")}`).click(function() {
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
        $(".styles__blooksHolder___3qZR1-camelCase").append(`<div class="styles__setHolder___rVq3Z-camelCase"><div class="styles__setTop___wIaVS-camelCase"><div class="styles__setTopBackground___342Wr-camelCase" style="background-image: url('/content/blookTile.png');"></div><div class="styles__setText___1PQLQ-camelCase">Miscellaneous</div><div class="styles__setDivider___3da0c-camelCase"></div></div><div id="${packId}" class="styles__setBlooks___3xamH-camelCase"></div></div>`);
        uncatogorizedBlooks.forEach(blook => {
          if (!blacket.blooks[blook] || blook === 'selected') return;
          let quantity;
          if (blacket.rarities[blacket.blooks[blook].rarity] && blacket.rarities[blacket.blooks[blook].rarity].color == "rainbow") quantity = `<div class="styles__blookText___3AMdK-camelCase" style="background-image: url('/content/rainbow.gif');">${blacket.user.blooks[blook].toLocaleString()}</div></div>`;
          else quantity = `<div class="styles__blookText___3AMdK-camelCase" style="background-color: ${blacket.rarities[blacket.blooks[blook].rarity].color};">${blacket.user.blooks[blook].toLocaleString()}</div></div>`;
          $(`#${packId}`).append(`<div id="${blook.replaceAll(' ', '-').replaceAll("'", "_")}" class="styles__blookContainer___3JrKb-camelCase" style="cursor: pointer" role="button" tabindex="0"><div class="styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase"><img loading="lazy" src="${blacket.blooks[blook].image}" draggable="false" class="styles__blook___1R6So-camelCase" /></div>${quantity}`);
          $(`#${blook.replaceAll(' ', '-').replaceAll("'", "_")}`).click(function() {
            blacket.selectBlook(blook);
          });
        });
      };
    }, 2000);

    blacket.sellBlook = (quantity) => {
      if (quantity == `` || quantity == 0) return;
      $(`.arts__modal___VpEAD-camelCase`).remove();
      blacket.user.blooks[blacket.blooks.selected] -= quantity;
      if (blacket.user.blooks[blacket.blooks.selected] < 1) {
        $(`#${blacket.blooks.selected.replaceAll(" ", "-").replaceAll("'", "_")} > div:nth-child(2)`).remove();
        $(`#${blacket.blooks.selected.replaceAll(" ", "-").replaceAll("'", "_")}`).append(`<i class="fas fa-lock styles__blookLock___3Kgua-camelCase" aria-hidden="true"></i>`);
        $(`#${blacket.blooks.selected.replaceAll(" ", "-").replaceAll("'", "_")}`).attr("style", "cursor: auto;");
        $(`#${blacket.blooks.selected.replaceAll(" ", "-").replaceAll("'", "_")} > div:nth-child(1)`).attr("class", "styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase styles__lockedBlook___3oGaX-camelCase");
        delete blacket.user.blooks[blacket.blooks.selected];
        blacket.blooks.selected = Object.keys(blacket.user.blooks)[Math.floor(Math.random() * Object.keys(blacket.user.blooks).length)];
      } else $(`#${blacket.blooks.selected.replaceAll(" ", "-").replaceAll("'", "_")} > div:nth-child(2)`).html(blacket.user.blooks[blacket.blooks.selected].toLocaleString());
      blacket.selectBlook(blacket.blooks.selected);
    };

    blacket.listBlook = (price) => {
      if (price == `` || price == 0) return;
      $(`.arts__modal___VpEAD-camelCase`).remove();
      blacket.user.blooks[blacket.blooks.selected] -= 1;
      if (blacket.user.blooks[blacket.blooks.selected] < 1) {
        $(`#${blacket.blooks.selected.replaceAll(" ", "-").replaceAll("'", "_")} > div:nth-child(2)`).remove();
        $(`#${blacket.blooks.selected.replaceAll(" ", "-").replaceAll("'", "_")}`).append(`<i class="fas fa-lock styles__blookLock___3Kgua-camelCase" aria-hidden="true"></i>`);
        $(`#${blacket.blooks.selected.replaceAll(" ", "-").replaceAll("'", "_")}`).attr("style", "cursor: auto;");
        $(`#${blacket.blooks.selected.replaceAll(" ", "-").replaceAll("'", "_")} > div:nth-child(1)`).attr("class", "styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase styles__lockedBlook___3oGaX-camelCase");
        delete blacket.user.blooks[blacket.blooks.selected];
        blacket.blooks.selected = Object.keys(blacket.user.blooks)[Math.floor(Math.random() * Object.keys(blacket.user.blooks).length)];
      } else $(`#${blacket.blooks.selected.replaceAll(" ", "-").replaceAll("'", "_")} > div:nth-child(2)`).html(blacket.user.blooks[blacket.blooks.selected].toLocaleString());
      blacket.selectBlook(blacket.blooks.selected);
    }
    // end of spoof blooks
  } else if (location.pathname === '/inventory') {
    // start of spoof inv
    blacket.listItem = (item, itemId, price) => {
      if (price == `` || price == 0) return;
      $(`.arts__modal___VpEAD-camelCase`).remove();
      $("body").append(`<div id="errorModal" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Error<br><br>Something went wrong. Try again in a few minutes.</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
      $("#closeButton").click(() => {
        $("#errorModal").remove();
      });
    };

    blacket.appendBooster = (item) => {
      item = item + ' Hour Booster';
      let itemId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
      $(`.styles__packsWrapper___2hBF4-camelCase`).append(`<div id="${itemId}" class="styles__packContainer___3RwSU-camelCase" role="button" tabindex="0" style="background: ${blacket.items[item].color};"><div class="styles__packImgContainer___3NABW-camelCase"><img loading="lazy" src="${blacket.items[item].image}" class="styles__packImg___3to1S-camelCase" draggable="false"></div></div>`);

      $(`#${itemId}`).click(() => {
        $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase">
        <div class="styles__text___KSL4--camelCase"><div>Do you want to use or list this item?</div></div>
        <div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase">
        <div id="useButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Use</div></div>
        <div id="listButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">List</div></div>
        <div id="cancelButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Cancel</div></div>
       </div></div><input type="submit" style="opacity: 0; display: none;"> </form></div>
      `);

        $("#useButton").click(() => {
          $(".arts__modal___VpEAD-camelCase").remove();
          $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"> <div class="styles__text___KSL4--camelCase"> <div> Are you sure you want to use your ${item}? </div></div><div class="styles__holder___3CEfN-camelCase"> <div class="styles__buttonContainer___2EaVD-camelCase"> <div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"> <div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Yes</div></div><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"> <div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">No</div></div></div></div><input type="submit" style="opacity: 0; display: none;"/> </form> </div>`);
          $("div.styles__button___1_E-G-camelCase:nth-child(1)").click(() => {
            $(".arts__modal___VpEAD-camelCase").remove();
            $("body").append(`<div id="errorModal" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Error<br><br>Something went wrong. Try again in a few minutes.</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
            $("#closeButton").click(() => {
              $("#errorModal").remove();
            });
          });
          $("div.styles__button___1_E-G-camelCase:nth-child(2)").click(() => {
            $(".arts__modal___VpEAD-camelCase").remove();
          });
        });

        $("#listButton").click(() => {
          $(".arts__modal___VpEAD-camelCase").remove();
          $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase">
            <div class="styles__text___KSL4--camelCase">List ${item} item for how many tokens?</div><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase">
            <div style="border: 3px solid rgba(0, 0, 0, 0.17);border-radius: 6px;width: 90%;height: 50px;margin: 0px;display: flex;flex-direction: row;align-items: center;"><input style="  border: none;height: 40px;line-height: 40px;font-size: 28px;text-align: center;font-weight: 700;font-family: Nunito, sans-serif;color: #ffffff;background-color: #3f3f3f;outline: none;width: 100%;" placeholder="Price" maxlength="9" value=""></div></div>
            <div class="styles__buttonContainer___2EaVD-camelCase"><div id="yesButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">List</div></div>
            <div id="noButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Cancel</div>
            </div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>
          `);

          $(`.styles__container___1BPm9-camelCase`).submit((event) => {
            event.preventDefault();
            blacket.listItem(item, itemId, $(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).val());
          });

          $(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).focus();
          $(`#yesButton`).click(() => {
            blacket.listItem(item, itemId, $(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).val());
          });
          $(`#noButton`).click(() => {
            $(`.arts__modal___VpEAD-camelCase`).remove();
          });
          $(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).on('input', () => {
            if (/[^0-9]/.test($(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).val())) {
              $(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).val($(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).val().replace(/[^0-9]/g, ''));
            }
          });
          blacket.stopLoading();
        });
        $("#cancelButton").click(() => {
          $(".arts__modal___VpEAD-camelCase").remove();
        });
      });
    };

    let oneHour = Number.parseInt(prompt('How many 1 Hour Boosters would you like to spoof?'));
    let threeHour = Number.parseInt(prompt('How many 3 Hour Boosters would you like to spoof?'));

    if (oneHour > 8 || threeHour > 8) {
      alert('It\'s unrealistic to have more than 8 of each booster.\nAutomatically set both values to 8.');
      oneHour = 8;
      threeHour = 8;
    };

    document.getElementsByClassName('styles__packsWrapper___2hBF4-camelCase')[0].children[0].remove();
    for (let one = 0; one < oneHour; one++) blacket.appendBooster('1');
    for (let three = 0; three < threeHour; three++) blacket.appendBooster('3');
    // end of spoof inv
  } else if (location.pathname === '/chat') {
    Array.from(document.getElementById('chatContainer').children).forEach(a => {
      if (a.children[1].innerText.slice(0, -1) === blacket.user.username) {
        a.children[0].src = src;
        a.children[1].children[0].classList.add('rainbow');
      };
    });
  } else alert('There is no current support for this page.\nIf you have an idea, open an issue to request!');
  blacket.stopLoading();
})();
