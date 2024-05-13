function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('dia')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'natureza.arvores.jpeg'
        document.body.style.background = '97, 167, 120, 0.945'
        
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#DEB887'
    }
    else {
        img.src = 'noite.jpg'
        document.body.style.background = '#1A1E44'
    }
}