
    if (x.value == 0 || ini == fim) {   //Condição de ERRO
        window.alert('Impossível Contar! Tente Novamente.')

        if (x.value == 0) {
            document.getElementById('varfrase').style.color = 'red'
        }

        if (ini == fim) {
            document.getElementById('inifrase').style.color = 'red'
            document.getElementById('fimfrase').style.color = 'red'
        }

    }

    if (x.value > 0 && fim > ini) {  //Condição de Contagem

        res.innerHTML = `<br><br> Indo de ${x.value} em ${x.value} temos: `

    }
