var i = 0

function verif() {

    var sec = document.getElementById('section')
    var num = document.getElementById('txtnum')
    var inf = document.getElementById('inf')
    var n = Number(num.value)

    for(i; i <= 0; i++) {
        var div = document.createElement('div')
        div.setAttribute('id', 'res') 
        
        sec.appendChild(div)

        var res = document.getElementById('res')
        var sel = document.createElement('select')
        sel.setAttribute('id', 'seltab')

        res.appendChild(sel) 
    }

    if (n > 0) {      
        for(let tab = 1; tab <= 10; tab++) {
         var seltab = document.getElementById('seltab')
         var opt = document.createElement('option')
         seltab.appendChild(opt)
 
         opt.text = `${n} x ${tab} = ${n*tab}`
        } seltab.setAttribute('size', '10')
          num.value = ''
     }
} 