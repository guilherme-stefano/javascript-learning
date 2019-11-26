const valores = [7.8, 8.8, 9.9 ,10.10]

console.log(valores[0], valores[3])

valores[10]
console.log(valores[10])

valores[10] = 10;
console.log(valores[10])
console.log(valores[9])

console.log(valores.length)

valores.push({id:3}, false, null, 'teste')

console.log(valores)

console.log(valores.pop())

console.log(valores)

delete valores[0]

console.log(valores)

console.log(typeof valores)