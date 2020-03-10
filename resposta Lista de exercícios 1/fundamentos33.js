let vetorString = ['a','b','c','d']
let vetorInteiro = [1,2,3,4]
let vetorDecimal = [1.1,2.1,3.1,4.1]

let todos = vetorString.concat(vetorInteiro, vetorDecimal)

console.log(todos)

todos = [].concat(vetorString,vetorInteiro, vetorDecimal)

console.log(todos)