Array.prototype.filter2 = function(callback){
     let array = []
     for (let i = 0 ; i < this.length ; i++){
         if(callback(this[i], i, this)){
             array.push(this[i])
         }
     }
     return array
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}    
]


// frageis e caros
const frageis = f => f.fragil = true
const caros = f => f.preco > 500

console.log(produtos.filter2(frageis).filter2(caros))