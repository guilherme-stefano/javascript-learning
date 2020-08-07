const fs = require('fs')
const path = require('path')

const caminho  = path.join(__dirname, '/dados.txt')



function leArquivo(caminhoParam){
    return new Promise(resolve => {
        fs.readFile(caminhoParam, 'utf-8', (err, conteudo) =>{
            resolve(conteudo.toString())
        })
        console.log('Depois de Ler')        
    })
}

leArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é : ${conteudo}`)
    .then(console.log)