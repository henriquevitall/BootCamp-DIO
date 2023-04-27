
// FUNCTION PODE SER INVOCADO PARA REUSAR

// SEM RETORNO // 
/*
function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Henrique');
sayMyName('Julia');

///////////////////////// ** /////////////////////////

//FUNÇÃO COM RETORNO

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
*/
///////////////////////// ** /////////////////////////

// USO DE MAIN NA FUNÇÃO PRINCIPAL

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc <= 18.5) {
    return 'Abaixo do peso';
} else if (imc > 18.5 && imc <= 25) {
    return 'Peso normal';
} else if (imc > 25 && imc <= 30) {
    return 'Acima do peso';
} else if (imc > 30 && imc <= 40) {
    return 'Obeso';
} else if (imc > 40) {
    return 'Obesidade morbida';
}
}

/*
function main() {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}
*/

//COM PARENTESES SE TORNA PRINCIPAL E NÃO PRECISA CHAMAR
(function() {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();