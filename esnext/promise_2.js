// setTimeout(function(){
//     console.log('Executando callback ...')
//     setTimeout(function(){
//         console.log('Executando callback ...')
//         setTimeout(function(){
//             console.log('Executando callback ...')
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve('Executei gostoso')
        }, tempo)
    })
}

let p = esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)