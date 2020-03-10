function classificaTriangulo(ladoA, ladoB, ladoC){
    if( (ladoA == ladoB) &&  (ladoB==ladoC)) {
        return 'equilatero'
    }
    if( (ladoC == ladoA ) || (ladoC == ladoB) || (ladoB == ladoA) ){
        return 'isoceles'
    }
    if( (ladoC != ladoA ) && (ladoC != ladoB) && (ladoB != ladoA) ){
        return 'escaleno'
    }
}

console.log(classificaTriangulo(2,2,2))