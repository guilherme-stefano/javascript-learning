const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false},
]


// Desafio 1: Todos os alunos são bolsistas ?
let bolsas = alunos.map( b => b.bolsista)
let bolsistas = bolsas.reduce( (acumulador, atual) => {
    return acumulador && atual
})

console.log(bolsistas)


// Desafio 2: Algum aluno é bolsista ?

 bolsas = alunos.map( b => b.bolsista)
 bolsistas = bolsas.reduce( (acumulador, atual) => {
    return acumulador || atual
})

console.log(bolsistas)
