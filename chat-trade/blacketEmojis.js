$("#chatBox").off("keydown");

$("#chatBox").on("keydown", function(e) {
  if (e.keyCode !== 13) return;
  if (!$(this).val()) return;
  if (blacket.chat.timeout > Date.now()) return;

  if ($("#chatBox").val().length > 0) {
    let str = '';
      
    $("#chatBox").val().split('--blacket')[0].split('').forEach(a => {
      if (a === ' ') str += ':blacketSpace:';
      else str += `:blacket${a.toUpperCase()}:`;
    });
      
    if (str.endsWith(':blacketSpace:')) blacket.socket.emit("chat", str.slice(0, -14));
    else blacket.socket.emit('chat', str);
      
    if (blacket.user.perms.includes("*") || blacket.user.perms.includes("bypass_delay")) blacket.chat.timeout = Date.now();
    else blacket.chat.timeout = Date.now() + 1000;
    $("#chatBox").val("");
  };
});
