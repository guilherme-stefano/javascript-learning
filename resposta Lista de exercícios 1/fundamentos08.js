function contaPontuacoes(pontuacoesString) {
   let pontuacoes = pontuacoesString.split(' ')
   let bateuRecorde = 0;
   let recordeInicial =  parseInt(pontuacoes[0])
   let piorPontuacao = parseInt(pontuacoes[0])
   let piorPontuacaoIndex = 1;
   for (let i = 1 ; i<pontuacoes.length; i++) {
       let pontuacao = parseInt(pontuacoes[i])
       if (recordeInicial > pontuacao) {
            recordeInicial = pontuacao
            bateuRecorde++
       }
       if(pontuacao < piorPontuacao ){
            piorPontuacao = pontuacao
            piorPontuacaoIndex = i+1
       }
   }

   return [bateuRecorde, piorPontuacaoIndex]

}

console.log(contaPontuacoes("10 20 20 8 25 3 0 30 1"))
console.log(contaPontuacoes("30 40 20 4 51 25 42 38 56 0"))
 
 
