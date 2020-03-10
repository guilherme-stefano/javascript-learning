function calculaNotas(valor) {
    let notasRetorno = [];
    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;
    let nota5 = 0;
    let nota1 = 0;
    while (valor > 0) {
        if (valor >= 100) {
            nota100++;
            valor = valor - 100;
        }
        if (valor >= 50 && valor < 100) {
            nota50++;
            valor = valor - 50;
        }
        if (valor >= 10 && valor < 50) {
            nota10++;
            valor = valor - 10;
        }
        if (valor >= 5 && valor < 10) {
            nota5++;
            valor = valor - 5;
        }
        if (valor >= 1 && valor < 5) {
            nota1++;
            valor = valor - 1;
        }
    }

    if (nota100) {
        notasRetorno.push(`${nota100} nota(s) de R$ 100`)
    }
    if (nota50) {
        notasRetorno.push(`${nota50} nota(s) de R$ 50`)
    }
    if (nota10) {
        notasRetorno.push(`${nota10} nota(s) de R$ 10`)
    }
    if (nota5) {
        notasRetorno.push(`${nota5} nota(s) de R$ 5`)
    }
    if (nota1) {
        notasRetorno.push(`${nota1} nota(s) de R$ 1`)
    }

    return notasRetorno
}

console.log(calculaNotas(611))


