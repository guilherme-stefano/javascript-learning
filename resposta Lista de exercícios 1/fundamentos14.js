function frutaCondicional(fruta) {
    switch(fruta){
        case 'kiwi': 
        console.log('Estamos com escassez de kiwis')
            break
        case 'maçã':
            console.log( 'Não vendemos esta fruta aqui')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default :
            console.log(  'erro')
    }
}

frutaCondicional('kiwi')



