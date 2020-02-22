const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa quebrou o carro!!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log("1" , pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log("2" , pilotos)

pilotos.splice(3,1) //massa quebrou :(
console.log("3" , pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log("4", algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // novo array
console.log("5", algunsPilotos2)