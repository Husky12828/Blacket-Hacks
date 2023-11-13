let getRewards = async () => {
    let user = await (await fetch('/worker/user/')).json();
    return {
        tokens: user.user.tokens,
        xp: user.user.exp
    };
};

let showModal = (content, doAudio) => {
    $('.toastMessage').remove();

    let id = Math.random().toString(36).substring(2, 15);
    $('#app').append(`<div id='${id}' class='toastMessage' style='animation: styles__oldGrowIn___3FTko-camelCase 0.5s linear forwards; background-color: #1f1f1f;border-radius: 7px;left: 0; right: 0; margin: auto;text-align: center;height: fit-content;top: -90%;'><text style='color: white; font-size:20px;'>${content}</text></div>`);

    if (doAudio) new Audio('/content/notification.ogg').play();

    setTimeout(() => {
        $(`#${id}`).attr('style', 'animation: styles__oldGrowOut___3FTko-camelCase 0.5s linear forwards; background-color: #1f1f1f;border-radius: 7px;left: 0; right: 0; margin: auto;text-align: center;height: fit-content;top: -90%;');
        setTimeout(() => $(`#${id}`).remove(), 1500);
    }, 3000);
};

let lastRewards = {
    tokens: 0,
    xp: 0
};

(async () => {
    lastRewards = await getRewards();

    blacket.socket.on('chat', async (t) => {
        if (t.user.username === blacket.user.username) {
            let curRewards = await getRewards();

            if (curRewards.tokens !== lastRewards.tokens) {
                showModal(`You have earned ${curRewards.tokens - lastRewards.tokens} tokens from chat!`);
                lastRewards.tokens = curRewards.tokens;
            };

            if (curRewards.xp !== lastRewards.xp) {
                showModal(`You have earn ${curRewards.xp - lastRewards.xp} XP from chat!`);
                lastRewards.xp = curRewards.xp;
            };
        };
    });
})();