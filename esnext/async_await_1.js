function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve('Executei gostoso')
        }, tempo)
    })
}

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(()=> resolve(10), 5000)
    })
}

async function retornarValorRapido(){
    return 20 // vai retornar uma promise
}

// esperarPor()
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))
 

    async function executar(){
        let valor = await  retornarValor()
        await esperarPor(2000)
        console.log(`Async/Await ${valor}`)
        await esperarPor(2000)
        console.log(`Async/Await ${valor + 1} `)
        await esperarPor(2000)
        console.log(`Async/Await ${valor + 2}`)

        return valor + 3
    }

    const v = executar().then(console.log(v))

    async function executarDeVerdade(){
        const valor = await executar()
        console.log(valor)
    }


    executarDeVerdade()