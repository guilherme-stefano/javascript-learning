function ContaParesImpares(numeros) {
  let pares = 0;
  let impares = 0;
  for (i in numeros) {
    if(numeros[i]%2 ==0){
      pares++
    } else {
      impares++
    }
  }
  console.log(`Pares : ${pares}`)
  console.log(`Impares : ${impares}`)
}
ContaParesImpares([1,2,3,4,5])