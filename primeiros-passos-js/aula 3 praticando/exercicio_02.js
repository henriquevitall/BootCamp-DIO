/*
    2) O IMC é um critério da OMS para dar uma indicação sobre a condição de peso de um adulto.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    Condições do IMC em adultos:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade morbida;
*/

const peso = 80;
const altura = 1.80;
//const imc = peso / (altura * altura);
const imc = peso / Math.pow(altura,2);
console.log('Seu IMC é ' + imc.toFixed(2));

if (imc <= 18.5) {
    console.log('Abaixo do peso');
} else if (imc > 18.5 && imc <= 25) {
    console.log('Peso normal');
} else if (imc > 25 && imc <= 30) {
    console.log('Acima do peso');
} else if (imc > 30 && imc <= 40) {
    console.log('Obeso');
} else if (imc > 40) {
    console.log('Obesidade morbida');
}


