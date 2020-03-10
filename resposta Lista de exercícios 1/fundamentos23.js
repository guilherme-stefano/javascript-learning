function mediaAprovado(codigo, nota1, nota2, nota3) {
    let maiorNota = calculaMaiorNota( nota1, nota2, nota3)
    let peso1 = calculaPesao (nota1, maiorNota)
    let peso2 = calculaPesao (nota2, maiorNota)
    let peso3 = calculaPesao (nota3, maiorNota)
    let maiorNotaRepetida = maiorNotaRepete( nota1, nota2, nota3, maiorNota)
    let media = (peso1 + peso2 + peso3) / (4 * maiorNotaRepetida.length + 3 * 3 - maiorNotaRepetida.length )
    
    if(media >= 5){
        console.log(`USUARIO ${codigo} com média ${media} e status APROVADO `)
        return 'APROVADO'
    } else{
        console.log(`USUARIO ${codigo} com média ${media} e status REPROVADO `)
        return 'REPROVADO'
    }

}


function maiorNotaRepete(nota1,nota2,nota3, maiorNota){
    let notas = [nota1, nota2, nota3];
    let notasFilter = notas.filter(nota => nota == maiorNota)
    return notasFilter
}

function calculaPesao (nota, maiorNota){
    return nota * (nota == maiorNota ? 4: 3) 
}

function calculaMaiorNota(nota1, nota2, nota3){
    let notas = [nota1, nota2, nota3];
    let maiorNota =  notas.reduce( (nota, anterior) => {
        if(nota > anterior) {
            return nota
        } else {
            return anterior
        }
    })

    return maiorNota
}

console.log(mediaAprovado(11,1,1,2))
