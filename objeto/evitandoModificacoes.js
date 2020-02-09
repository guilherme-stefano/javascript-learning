// Object.preventExtensions permite delete
const produto = Object.preventExtensions ({
    nome:'Qualquer', preco:1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descicao = 'Borracha escolar branca'
delete produto.tag // permitido
console.log(produto)

//Object.seal nao permite delete
const pessoa = {nome : 'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome 
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes (writeble : false)