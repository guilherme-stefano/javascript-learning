let a = 3

global.b = 123

this.c = 457
this.d = falsethis.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel sem var nem let !
abc = 3 // não faça isso em casa
