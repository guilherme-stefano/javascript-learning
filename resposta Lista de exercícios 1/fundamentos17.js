function calculaAumento(funcionario, salario) {
    switch (funcionario) {
        case 'A':
            return salario * 1.1
            break
        case 'B':
            return salario * 1.15
            break
        case 'C':
            return salario * 1.2
            break
        default:
            return 'Plano inválido'
    }
}

console.log(calculaAumento('C', 100))


