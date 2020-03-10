function quantidadeNegativos(numeros) {
  let negativos = 0;
  for (let i=0 ; i<numeros.length; i++) {
    if( numeros[i] < 0 ){
      negativos++
    } 
  }
  console.log(`negativos : ${negativos}`)
}
quantidadeNegativos([1,2,3,4,-1,10,21,1,22,12,14,15])