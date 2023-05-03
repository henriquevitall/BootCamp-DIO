
// DEMOSTRAÇÃO DE USO DE CLASSE E OBJETO
///////////////////////////// ** ///////////////////////////
/*
class Pessoa {

    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

console.log(vitor);
console.log(renan);
*/

///////////////////////////// ** ///////////////////////////

/*const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.nome = 'Renan';
pessoa.idade = 30;


pessoa.descrever();*/

///////////////////////////// ** ///////////////////////////

// COMPARAR AS PESSOAS

class Pessoa {

    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas (p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const henrique = new Pessoa('Henrique', 36);
const renan = new Pessoa('Renan', 30);

compararPessoas(henrique, renan);



