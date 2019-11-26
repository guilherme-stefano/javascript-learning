//Armazenando um função em uma variável

const imprimirSoma = function(a,b){
    console.log(a+b);
}

imprimirSoma(1,2)

//Armazenando um função arrow em uma variável

const soma = (a,b) =>{
    return a + b;
}

console.log(soma(2,3))

const subtracao = (a,b) => a - b

console.log(subtracao(2,3))