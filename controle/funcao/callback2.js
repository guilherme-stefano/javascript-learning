const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas);

// Com callback

let notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2);

// Com callback com arrow

let notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);

// Com callback com arrow e funcao elegante

const regra = nota => nota < 7

let notasBaixas4 = notas.filter(regra)
console.log(notasBaixas4);

