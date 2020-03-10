
function imprimeImpares(inicio=0, fim=100){
  if(inicio > fim){
    let fimTemp = fim
    fim = inicio
    inicio = fimTemp
  }

  for(let i = inicio; i <= fim ; i++){
    if(i%2 != 0){
      console.log(i);
    }
  }
}

imprimeImpares(9,1)