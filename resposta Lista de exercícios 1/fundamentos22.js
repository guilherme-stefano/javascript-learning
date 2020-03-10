function calculaAnuidade(mes, anuidade) {
        if(mes > 0 && mes < 13){
           let atraso = mes - 1
           return (anuidade * (1.05 ** atraso)).toFixed(2)
        } else {
            return 'Ano invalido'
        }
    }


console.log(calculaAnuidade(1,10))
