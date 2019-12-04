let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // a soma é feita primeiro antes da comparação e a subtração depois
console.log(num1 === num2)