function encontraCriancas(altura1, taxa1, altura2, taxa2) {
  if(altura1 == altura2){
    console.log('Não Existe criança maior')
  }
  if(altura1 > altura2) {
    let anoQueUltrapassa = verificaQuandoUltrapassa(altura1, taxa1, altura2, taxa2);
    if(anoQueUltrapassa < 22){
      console.log('Ultrapassa no ano ' + anoQueUltrapassa )
    } else{
      console.log('Não Vai Ultrapassar' )
    }
  }
  if(altura2 > altura1) {
    let anoQueUltrapassa = verificaQuandoUltrapassa(altura2, taxa2, altura1, taxa1);
    if(anoQueUltrapassa < 22){
      console.log('Ultrapassa no ano ' + anoQueUltrapassa )
    } else {
      console.log('Não Vai Ultrapassar' )
    }
  }
}

function verificaQuandoUltrapassa(altura1, taxa1, altura2, taxa2){
  let anoUltrapassa = 0;
  while(altura1 >= altura2 && anoUltrapassa <= 22){
    altura1 = altura1 + taxa1
    altura2 = altura2 + taxa2 
    anoUltrapassa++; 
  }
  return anoUltrapassa
}

encontraCriancas(120, 10, 100, 20)