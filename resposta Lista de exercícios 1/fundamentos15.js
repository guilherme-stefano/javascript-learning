function compraCarros(carro) {
    switch(carro){
        case 'hatch': 
            return 'Compra efetuada com sucesso'
            break
        case 'caminhonetes':
        case 'motocicletas':
        case 'sedan':
            return 'Tem certeza que não prefere este modelo?'
            break
        default :
            return'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(compraCarros('sedan'))


