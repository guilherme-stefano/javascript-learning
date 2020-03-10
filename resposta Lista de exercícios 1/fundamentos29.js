function ContaIntervalor(numeros) {
  let intervalo = 0;
  for (i in numeros) {
    if(numeros[i] >=10 &&  numeros[i] <=20 ){
      intervalo++
    }
  }
  console.log(`intervalo : ${intervalo}`)
}
ContaIntervalor([1,2,3,4,5,10,21,1,22,12,14,15])