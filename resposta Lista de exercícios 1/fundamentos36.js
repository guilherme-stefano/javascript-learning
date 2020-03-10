function multiplicaVetores(vetor, numero){
  return vetor.map( v => v * numero)
}

function multiplicaVetores5(vetor, numero){
  if(numero > 5)
  return vetor.map( v => v * numero)
  else 
  return vetor
}

console.log(multiplicaVetores([1,2,3,4,5], 10))
console.log(multiplicaVetores5([1,2,3,4,5], 6))
console.log(multiplicaVetores5([1,2,3,4,5], 5))