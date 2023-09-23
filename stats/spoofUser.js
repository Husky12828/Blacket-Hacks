(() => {
    $('.styles__headerName___1GBcl-camelCase').html(prompt('What do you want your name to be?'));
    $('.styles__headerTitle___24Ox2-camelCase').html(prompt('What do you want your role to be?'));

    let nameColor = prompt('Enter a name color...\n\nAccepted colors:\n - Valid hex code ("#000000")\n - Color names ("black")\n - "rainbow"');
    if (nameColor === 'rainbow') $('.styles__headerName___1GBcl-camelCase').addClass('rainbow')
    else $('.styles__headerName___1GBcl-camelCase').css('color', nameColor)
})();