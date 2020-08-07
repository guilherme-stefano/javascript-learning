function gerarNumerosEntre(min, max, numerosProibidos){
    if(min > max)[max, min] = [min, max]
    
    return new Promise((resolve, reject) => {
        const fator = (max - min ) + 1
        const aleatorio = parseInt(Math.random() * fator)
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros){
    try{
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()){
            numeros.push(await geraNumerosEntre(1, 60, numeros))
        }
        return numeros // forma de dar resolve em funcao assincrona
    } catch(e){
        throw 'Que chato!!' // forma de resolver problema em funcao assincrona
    }

}

// gerarNumerosEntre(1,5, [1,2,4])
//     .then(console.log)
//     .catch(console.log)

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)
