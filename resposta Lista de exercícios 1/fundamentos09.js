function classificaAluno(nota) {
     if(((5 - (nota % 5)) <= 2) && (nota >= 38)){
          nota = nota + (5 - (nota % 5))
     }
     console.log(nota)
     if(nota < 40){
          return "reprovado"
     } 
     else {
          return "aprovado"
     }
   
}

console.log(classificaAluno(43))
 
 
