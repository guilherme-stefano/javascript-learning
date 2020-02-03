// Pessoa -> 123 {...}
const pessoa = {nome: 'João'}

pessoa.nome = 'Pedro'

console.log(pessoa)

// Pessoa -> 456 -> {....}
//pessoa = {nome:'Ana'} /// vai dar erro

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABA'
delete pessoa.nome

console.log(pessoa)

// é assim que se cria um pessoa constante
const pessoaConstante = Object.freeze({nome : 'Francisco'})