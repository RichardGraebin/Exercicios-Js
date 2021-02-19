let num = [5, 7, 3, 1]

num[4] = 2

console.log(`O segundo valor do vetor é ${num[1]}`)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`A let num possui os valores = ${num}`)
num.sort()
console.log(`Porem, após usar o sort, a ordem muda para ${num}`)
num.push(9)
console.log(`E após usar o push, o valor é adicionado ao final do array`)

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 
*/

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`O valor 5 está na posição ${num.indexOf(5)}`)