function iniciar() {
    let mensagem = document.querySelector('#mensagem')
    let img = document.querySelector('#imagem')
    let data = new Date()
    // let hora = data.getHours()
    let hora = 19
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#ffd0004b'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#fbc16f'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#684c51'
    }
}
