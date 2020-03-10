
function trocaVetores(a,b){
    console.log(a,b)
    for(let i = 0; i < a.length; i++){
        let aHead = a.shift()
        b.push(aHead)
        let bHead = b.shift()
        a.push(bHead)
    }
    console.log(a,b)
  }
  
  trocaVetores([1,2],[3,4])