/*
function escrevaSeuNome(nome) {
    return('Meu nome é ' + nome);
}

escrevaSeuNome('Henrique');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaSeuNome('Henrique') + ' e sou maior de idade');
    } else {
        console.log(escrevaSeuNome('Henrique') + ' e sou menor de idade');
    }
}

verificarIdade (36);
*/

//////////////////////////// ** /////////////////////////////

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const valor = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(valor, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(valor, 15));
} else if (formaDePagamento === 3) {
    console.log(valor);
} else if (formaDePagamento === 4) {
    console.log(aplicarJuros(valor, 10));
}