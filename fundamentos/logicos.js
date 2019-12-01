function compras(trabalho1 , trabalho2){
    const comprarSorverte = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor 
    const comprarTv32 = trabalho1 != trabalho2; // !=  se assemelha ao xor ( ou exclusivo)
    const materSaudavel = !comprarSorverte // operador unário

    return {comprarSorverte, comprarTv50, comprarTv32, materSaudavel};
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));