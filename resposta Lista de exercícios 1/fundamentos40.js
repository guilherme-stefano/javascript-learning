function conceitoNotas(notas) {
    for (let index = 0; index < notas.length; index++) {
        const nota = notas[index]
        console.log(nota)
        if (nota <= 4.9) {
            console.log('Conceito D')
            continue
        }
        if (nota <= 6.9) {
            console.log('Conceito C')
            continue
        }
        if (nota <= 8.9) {
            console.log('Conceito B')
            continue
        }
        if (nota <= 10) {
            console.log('Conceito A')
            continue
        }

    }
}

conceitoNotas([1,2,3,10])