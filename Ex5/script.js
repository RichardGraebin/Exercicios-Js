var num = document.getElementById('txtnum')
var nums = []
var section = document.getElementById('section')

var div = document.createElement('div')
var select = document.createElement('select')

var botao = document.createElement('input')
var p = document.createElement('p')

function adicionar() {

    function criarAd() {   // Cria a DIV do SELECT e o SELECT

    section.appendChild(div)
    div.appendChild(select)

    div.setAttribute('id', 'res')
    select.setAttribute('id', 'slc')
    select.setAttribute('size', '6')
    select.style.width = '170px'

    div.appendChild(p)
    p.appendChild(botao)
    botao.setAttribute('type', 'button')
    botao.setAttribute('value', 'Analisar')
    botao.setAttribute('onclick', 'analisar()')
        
    
}

    var res = document.getElementById('res')

    if (res == null && num.value >= 1 && num.value <= 100 && nums.indexOf(Number(num.value)) == -1) { // Verificador de EXISTENCIA DO SELECT
        criarAd() 
    }

    if (num.value >= 1 && num.value <= 100 && nums.indexOf(Number(num.value)) == -1) { // ADICIONA os numeros no array e no SELECT
 
        var slc = document.getElementById('slc')
     
        nums.push(Number(num.value))
        item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        slc.appendChild(item)

    } else {
        window.alert('Número inválido ou já adicionado.')
    }   
    
    num.value = ''            // Faz o usuário não sair do input#text e limpa a caixa
    num.focus()
 
    if (res == null) {       // Verificador de existência da DivAn
        var divAn = document.createElement('div')
        
        section.appendChild(divAn)
        divAn.setAttribute('id', 'divAn')
        }

}

function analisar(){      // Faz as contas e adiciona os parágrafos


    let maior  = nums[0]
    let menor = nums[0]

    for (let pos = 0;pos < nums.length; pos++) {     // Verifica qual o maior número de um array
        if(nums[pos] > maior) {
            maior = nums[pos] 
        }
        if(nums[pos] < menor) {                      // Verifica qual o menos número de um array 
            nums[pos] = menor
        }
    }

    let total = 0

    for(pos = 0; pos < nums.length; pos++ ) {        // Soma todos os números de um array
        total = total + nums[pos] 
    }

    let media = total / nums.length                  // Gera a média dos números no array

    var divGetAn = document.getElementById('divAn')
    divGetAn.innerHTML = `<p>Ao todo temos ${nums.length} valores adicionados.</p>`
    divGetAn.innerHTML += `<p>O maior valor dentre todos é ${maior}.</p>`
    divGetAn.innerHTML += `<p>O menor valor entre todos é ${menor}.</p>`
    divGetAn.innerHTML += `<p>A soma de todos os valores é ${total}.</p>`
    divGetAn.innerHTML += `<p>A média de todos os valores é ${media.toFixed().replace('.', ',')}.</p>`  
}