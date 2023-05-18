function downloadFile(url) {
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  a.download = `bb-tradelog-${mm}-${dd}-${yyyy}-${today.getSeconds()}.txt`;

  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
};

let logs = `Tradelogs started recording.`;
let log = (msg) => logs += `${msg}\n`;

let other = () => blacket.trade.user.username;
blacket.socket.on('trade', (data) => {
  if (data.data && data.data.user2 && typeof data.data.user2.tokens !== "undefined") log(`[Other] ${blacket.trade.user.username} set tokens to ${data.data.user2.tokens.toLocaleString()}`);
  if (data.data && data.data.user1 && typeof data.data.user1.tokens !== "undefined") log(`[Self] ${blacket.user.username} set tokens to ${data.data.user2.tokens.toLocaleString()}`);
  if (data.data && data.data.user2 && typeof data.data.user2.blooks !== "undefined") log(`[Other] ${blacket.trade.user.username} set blooks to ${Object.entries(data.data.user2.blooks).map(a => a[1] + 'x ' + a[0] + ',')}`.slice(0, -1));
  if (data.data && data.data.user1 && typeof data.data.user1.blooks !== "undefined") log(`[Self] ${blacket.user.username} set blooks to ${Object.entries(data.data.user2.blooks).map(a => a[1] + 'x ' + a[0] + ',')}`.slice(0, -1));
  if (data.data && data.data.user2 && data.data.user2.accepted) log(`[Other] ${blacket.trade.user.username} accepted.`);
  if (data.data && data.data.user1 && data.data.user1.accepted) log(`[Self] ${blacket.user.username} accepted.`);
  if (data.data && (data.data.completed || data.data.declined)) {
    log(`Trade completed.`)
    downloadFile(`data:application/txt,${encodeURIComponent(logs)}`);
  };
});

blacket.socket.on('chat', (message) => {
  if (!message.user || !message.message) return;
  log(`[Chat] ${message.user.username} > ${message.message}`);
});