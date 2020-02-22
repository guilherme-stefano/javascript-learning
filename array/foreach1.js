const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1} : ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = nome => console.log(nome)

aprovados.forEach(exibirAprovados)

aprovados.forEach(function (nome, indice, array, x) { // x nao existe
    console.log(`${indice + 1} : ${nome} - Array ${array}, ${x}`)
})