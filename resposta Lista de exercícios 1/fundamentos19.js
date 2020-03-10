function calculaLanche(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return 3 * quantidade
        case 200:
            return 4 * quantidade
        case 300:
            return 5.50 * quantidade
        case 400:
            return 7.50 * quantidade
        case 500:
            return 3.50 * quantidade
        case 600:
            return 2.80 * quantidade
        default:
            return 'Produto não existe'
    }
}

console.log(calculaLanche(600, 2))


