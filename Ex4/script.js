function verif() {
    var num = document.getElementById('txtnum')
    var n = Number(num.value)
    var sec = document.getElementById('section')
    var div = document.createElement('div')
    var tab = document.createElement('select')
    var div2 = document.getElementById('seltab')   

    if (div2 != null) {
        div2.remove()
    }

    if (n==0) {
        window.alert('Número Inválido.')

        document.location.reload()
    }

    function create() {
        sec.appendChild(div)
        div.setAttribute('id', 'divId')

        div.appendChild(tab)
        tab.setAttribute('size', '10')
        tab.setAttribute('id', 'seltab')
    } 

    function options() {
        if (n != 0) {
            for (let i = 1; i <= 10; i++) {
                var opt = document.createElement('option')
                opt.setAttribute('name', 'opcoes')
                tab.appendChild(opt)

                opt.text = `${n} x ${i} = ${n*i}`
            }
        }
    }

    create()
    options()

}