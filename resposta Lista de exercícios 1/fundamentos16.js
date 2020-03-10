function calculadoraBasica(numA, numB, operator) {
    switch (operator) {
        case '+':
            return numA + numB
            break
        case '-':
            return numA - numB
            break
        case '*':
            return numA * numB
            break
        case '/':
            return numA / numB
            break
        default:
            return 'Operador não existe'
    }
}

console.log(calculadoraBasica(1,0,'/'))


