function baskara(a, b, c) {
    let delta = b**2 - 4 * a * c
    if(delta < 0){
        return 'Delta Negativo'
    }
    let positivo = (-b + Math.sqrt(delta)) / 2*a
    let negativo = (-b - Math.sqrt(delta)) / 2*a
    return [positivo, negativo]
}

console.log(baskara(1,3,2))
console.log(baskara(3, 1, 2))