
function progressaoAritmetica(r, n, a1){
    let soma = 0;
    for(let i = 1 ; i<=n ; i++){
      let termo = a1 + (i - 1) * r
      console.log(termo)
      soma += termo
    }
    return soma
}

function progressaoGeometrica(r, n, a1){
  let soma = 0;
  for(let i = 1 ; i<=n ; i++){
    let termo = a1 * (r**(i-1))
    console.log(termo)
    soma += termo
  }
  return soma
}

console.log(progressaoAritmetica(15 ,10,10 ))
console.log(progressaoGeometrica(2,3,4))