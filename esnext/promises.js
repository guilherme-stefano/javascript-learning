function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('then')
            resolve(frase, 'abc')
        }, segundos * 1000)
    })
}
// promise soh permite um parametro
falarDepoisDe(3, 'Que legal')
    .then((frase, abc) => {
        console.log(abc)
        return frase.concat('?!?')})
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))