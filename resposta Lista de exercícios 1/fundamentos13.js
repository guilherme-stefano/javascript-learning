function diaUtil(n) {
    switch(n){
        case 1:
        case 7:
            return false
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return true
            break;
        default:
            return false
    }
}

console.log(diaUtil(1))


