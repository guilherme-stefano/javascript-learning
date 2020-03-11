console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null 
console.log(module.exports)

exports = {
    nome: 'teste'
} // não funciona pois esta sendo alterada a referencia do objeto que aponta para module.exports que é quem manda
console.log(module.exports)

module.exports = { public: true} // forma correta de fazer o exports