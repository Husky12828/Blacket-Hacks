blacket.socket.on('chat', async (msg) => {
    blacket.requests.post("https://blacket.org/worker/friends/request", {
        user: msg.user.username
    });
});