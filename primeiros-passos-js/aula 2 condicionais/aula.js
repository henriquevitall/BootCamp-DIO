/*SABER SE NÚMERO É PAR
//EM "IF" SE A CONDICIONAL DENTRO () FOR V SERÁ EXECUTADO O CÓDIGO {}

const numero = 0;
const numeroPar = (numero % 2) === 0;

if (numeroPar) {
    console.log('Este numero é par!');
} else {
    console.log('Este numero é impar!')
}

//OUTRA FORMA DE ELSE
//if (!numeroPar) {
    console.log('Este numero é impar!');
}*/

///////////////////////////////////  **  ///////////////////////////////////////

// SABER SE É DIVISÍVEL POR 5
const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('Este numero é inválido!');
} else if (numeroDivisivelPor5) {
    console.log('Divide por 5');
} else {
    console.log('Não divide por 5!');
}

///////////////////////////////////  **  ///////////////////////////////////////


