function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        try{
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        }catch(e){
            reject('Ocorreu um erro!')
        }

    })
}

funcionarOuNao('Testando...', 0.1)
    .then(v => `Valor ${v}`)
    .then(v => consol.log(v),
          err => console.log(`err esp. ${err}`)) // tratamento de erro especifico , nao usar, pois se der erro no try catch da funcao vai cair aqui
    .then(() => console.log('Quase Fim'))
    .catch(err => console.log(`Erro: ${err}`))// pega erros no then se der erro e nao tiver tratamento especifico
    .then(() => console.log('Fim'))