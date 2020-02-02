class PessoaClasse {
    constructor(nome) {
        this.nome = nome // dessa forma o this da problema no browser ao associar ao click
    }

    falar () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new PessoaClasse('João')
p1.falar()

const PessoFuncao = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = PessoFuncao('Jonisclei')

p2.falar()