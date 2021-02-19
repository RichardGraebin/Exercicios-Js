function horas() {
  //  var horario = new Date()
  //  var hora = horario.getHours()

    var horario = window.prompt('Que horas são agora?')
    var hora = Number(horario)
    var img = document.getElementById('imagem')
    var txt = document.getElementById('frase')

    if (hora <= 0 || hora > 24) {
        window.alert('Insira uma hora válida!')
        horas()

    } else if (hora < 11) {
        txt.innerHTML = `Bom Dia! <br> Agora são exatamente ${hora} da manhã.` 
        img.src = 'imgmanha.png'
        document.body.style.background = '#aec2c4'
    } else if (hora < 18){
        txt.innerHTML = `Boa Tarde! <br> Agora são exatamente ${hora} da tarde.`
        img.src = 'imgtarde.png'
        document.body.style.background = '#a56b64'
    } else if (hora < 23) {
        txt.innerHTML = `Boa Noite! <br> Agora são exatamente ${hora} da noite.`
        img.src = 'imgnoite.png'
        document.body.style.background = '#283544'
    } 
}