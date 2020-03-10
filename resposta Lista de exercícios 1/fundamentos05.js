function dinheiroCorreto(dinheiro) {
    let dinheiroRound = Math.round(dinheiro * 100) / 100
    let dinheiroRetorno = dinheiroRound.toFixed(2).replace('.', ',')
    return `R$ ${dinheiroRetorno}`
}
console.log(dinheiroCorreto(0.1 + 0.2))