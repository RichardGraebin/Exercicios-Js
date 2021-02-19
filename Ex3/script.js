function contar() {

    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var xis = document.getElementById('txtvar')
    var res = document.getElementById('res')

    var i = Number(ini.value)
    var f = Number(fim.value)
    var x = Number(xis.value)

    function verif () {

        if (ini.value.length == 0 || i == f) {
            document.getElementById('inifrase').style.color = 'red'
            res.innerHTML = ''
            window.alert('Dados incorretos, tente novamente.')
        } else {
            document.getElementById('inifrase').style.color = 'black'
        }
    
        if (x == 0 || xis.value.length == 0 || (x > f && x > i)) {
            document.getElementById('varfrase').style.color = 'red'
            res.innerHTML = ''
            window.alert('Dados incorretos, tente novamente.')
        } else {
            document.getElementById('varfrase').style.color = 'black'
        }
    
        if (fim.value.length == 0 || i == f) {
            document.getElementById('fimfrase').style.color ='red'
            res.innerHTML = ''
            window.alert('Dados incorretos, tente novamente.')
        } else {
            document.getElementById('fimfrase').style.color ='black'
        }

    }
    function black () {
        document.getElementById('fimfrase').style.color ='black'
        document.getElementById('varfrase').style.color = 'black'
        document.getElementById('inifrase').style.color = 'black'
    }


    if (i == f || x == 0 || ini.value.length == 0 || fim.value.length == 0 || xis.value.length == 0 || (x > f && x > i)) {
     
        verif()
        
    } else if (i < f && x < f ) {

        black()
        res.innerHTML = `<br>De ${i} até ${f}, indo de ${x} em ${x}, temos: <br><br> `

        for (i; i <= f; i = i + x) {
            res.innerHTML += `${i} \u{1F449}`
        }   res.innerText += "Fim!"
            ini.value = ''
            fim.value = ''
            xis.value = ''

    } else if (i > f) {

        black()  
        res.innerHTML = `<br>De ${i} até ${f}, indo de ${x} em ${x}, temos: <br><br> `

        for (i; i >= f; i = i - x) {
            res.innerHTML += `${i} \u{1F449} `
        }   res.innerText += "Fim!"
            ini.value = ''
            fim.value = ''
            xis.value = ''
    }
}