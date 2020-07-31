// let e const
{
    var a = 1
    let b = 3
    console.log(b)
}
console.log(a)

// template string
const produto = 'iPad'
console.log(`${produto} é caro`);
console.log(`${produto} 
é 
caro`);

//Destructering 
const [l, e, ...tras] = "Cod3r"
console.log(l, e , tras)

const [x,y] = [1,2,3]
console.log(x,y)

const [x2,,y2] = [1,2,3]
console.log(x2,y2)

const {idade : i , nome} = {idade: "19", nome:"ana"}
console.log(i,nome)