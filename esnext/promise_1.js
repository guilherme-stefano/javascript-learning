const { toUnicode } = require("punycode")

let a = 1 
console.log(a)

let objeto = new Promise(function(cumprirPromessa){
    cumprirPromessa({
        x: 3,
        y: 4
    })
})


let array = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

console.log(typeof objeto)

objeto.then(function(valor){
    console.log(valor)
})

const primeiroElemento = array => array[0]


array.then(primeiroElemento)
    .then(primeiroElemento)
    .then(letro => letro.toLowerCase())
    .then(console.log)