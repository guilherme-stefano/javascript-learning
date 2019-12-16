const imprimeResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado!')
    }
}

imprimeResultado(10)
imprimeResultado(4)
imprimeResultado('EPA!')// evitar esse tipo de problema