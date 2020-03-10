function fatorial(n) {
    if(n == 0) {
        return 1
    }
    if(n == 1) {
        return 1
    }
    let fat = n;
    for(let i = n - 1 ; i > 1 ; i--){
        fat = fat * i
    }
    return fat 
}

console.log(fatorial(10))


