function MaiorMenor(numeros) {
  let maior = numeros[0];
  let menor = numeros[0];
  for (let i=1 ; i<numeros.length; i++) {
    if( numeros[i] > maior ){
      maior = numeros[i]
    } 
    if(numeros[i] < menor){
      menor = numeros[i]
    }
  }
  console.log(`maior : ${maior}`)
  console.log(`menor : ${menor}`)
}
MaiorMenor([1,2,3,4,5,10,21,1,22,12,14,15])