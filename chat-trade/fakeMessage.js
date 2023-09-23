(async () => {
    let msg = prompt('Enter a message...');
    if (location.pathname === '/chat') {
        let name = prompt('Enter a username...');
        blacket.requests.get(`/worker/user/${name}`, (t) => {
            if (t.error) return alert(`That's not a valid user`);
            blacket.appendChat({
                error: false,
                type: 'chat',
                user: t.user,
                message: msg
            }, (msg.toLowerCase().indexOf(blacket.user.username.toLowerCase()) > -1));
        });
    } else if (location.pathname === '/trade') {
        let className = '';
        if (blacket.trade.user.color == 'rainbow') className = ` class='rainbow'`;
        let message = blacket.htmlEncode(msg);
        chatContainer.maxScrollTop = chatContainer.scrollHeight - chatContainer.offsetHeight;
        $('#chatContainer').append(`<text style='color: ${blacket.trade.user.color};'${className}>[${blacket.trade.user.role}] ${blacket.trade.user.username}: </text><text style='color: white;'>${message}</text><br>`);
        if (chatContainer.maxScrollTop - chatContainer.scrollTop <= chatContainer.offsetHeight) chatContainer.scrollTop = chatContainer.scrollHeight;
    };
})();