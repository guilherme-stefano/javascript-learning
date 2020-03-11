const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const mulherChinesa = funcionario => funcionario.genero == 'F' && funcionario.pais == 'China'
    const menorSalario = (anterior, atual ) => {
        if (anterior.salario < atual.salario) {
            return anterior
        } else{
            return atual
        }
    }
    const mulhereChinesa = funcionarios.filter(mulherChinesa).reduce(menorSalario)
    console.log(mulhereChinesa)
})