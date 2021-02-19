var sex = document.getElementsByName('sex')

var data = new Date()
var anoatual= data.getFullYear()

var div = document.getElementById('div2')

var img = document.createElement('img')
img.setAttribute('id', 'foto')

var txt = document.createElement('p')
txt.setAttribute('id', 'res')

var genero = ''


function black() {
    document.getElementById('txtsex').style.color = 'black'
    document.getElementById('txtano').style.color = 'black'
}


function verif() {

    var anonasc = document.getElementById('ano')
    var idade = anoatual - Number(anonasc.value)

function verif2() {
    if (genero == '' || idade <= 0 || idade > 130) {

        window.alert('Credênciais Inválidas, tente novamente.')

        if (genero == '') {
            document.getElementById('txtsex').style.color = 'red'
            div.innerHTML = ''
        } else {
            document.getElementById('txtsex').style.color = 'black'
        }
        if (idade <= 0 || idade > 130 ) {
            document.getElementById('txtano').style.color = 'red'
            div.innerHTML = ''
        } else {
            document.getElementById('txtano').style.color = 'black'
        }
    }
   }

    if (sex[0].checked && idade > 0 && idade < 130) {

        black ()

        div.appendChild(txt)
        div.appendChild(img)

        if (idade <= 12) {          
            txt.innerText = `Detectamos que você é um menino de ${idade} anos de idade.`
            img.setAttribute('src', 'imgjovem.png')
        } else if (idade <= 50) {
            txt.innerText = `Detectamos que você é um homem de ${idade} anos de idade.`
            img.setAttribute('src', 'imgadulto.png')
        } else {
            txt.innerText = `Detectamos que você é um idoso de ${idade} anos de idade.`
            img.setAttribute('src', 'imgvelho.png')
        }
    } else if (sex[1].checked && idade > 0 && idade < 130) {

        black ()

        div.appendChild(txt)
        div.appendChild(img)

        if (idade <= 12) {
            txt.innerText = `Detectamos que você é uma menina de ${idade} anos de idade.`
            img.setAttribute('src', 'imgjovem.png')
        } else if (idade <=50) {
            txt.innerText = `Detectamos que você é uma mulher de ${idade} anos de idade.`
            img.setAttribute('src', 'imgadulto.png')
        } else {
            txt.innerText = `Detectamos que você é uma idosa de ${idade} anos de idade.`
            img.setAttribute('src', 'imgvelho.png')
        } 
    } else {
        verif2()
    }


    div.style.textAlign = 'center'
}   