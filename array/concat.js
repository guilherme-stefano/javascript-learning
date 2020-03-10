const filhas = ['Valesca', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']

const todos = filhas.concat(filhos)
const todosComFulano = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos) // arrays originais não são mechidos 

console.log([].concat([1,2], [3,4], 5, [[6,7]]))