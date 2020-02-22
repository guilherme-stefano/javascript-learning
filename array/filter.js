const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}    
]

console.log(produtos.filter(function(p){
    return false
}))

console.log(produtos.filter(function(p){
    return p.preco > 2500
}))

// frageis e caros
const frageis = f => f.fragil = true
const caros = f => f.preco > 500

console.log(produtos.filter(frageis).filter(caros))