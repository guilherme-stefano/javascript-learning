const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

const prod2 = {
    nome:"camisa Polo",
    preco: 79.90
}

'{"nome":"camisa Polo", "preco": 79.90}' // isso é um json


console.log(prod1)