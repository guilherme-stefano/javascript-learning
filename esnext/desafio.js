const fs = require('fs')


const caminho  = __dirname  + '/dados.txt'



function leArquivo(){
    return new Promise(function(resolve){
        fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
            resolve(conteudo)
        })        
    })
}

leArquivo()
    .then(console.log)