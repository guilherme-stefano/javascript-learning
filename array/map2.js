const carrinho = [
    '{"nome" : "Borracha", "preco" : 3.45}',
    '{"nome": "Caderno", "preco" : 13.90}',
    '{"nome": "Kit de Lapis", "preco" : 41.22}',
    '{"nome": "Caneta", "preco" : 7}'
]

// Retornar um array com os preços
// minha forma
let novo = carrinho.map(string => {
    let objeto = JSON.parse(string)
    return objeto.preco
})

console.log(novo)

// forma dele

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)