/* Faça um programa para calcular o valor de uma viagem.

Vecê terá 3 variaveis. Sendo elas:
1 - preço do combustivel;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

// Entrada

const precoCombustivel = 5.79;
const kmPorLitro = 14;
const distanciaKm = 160;

// Lógica

const litrosConsumidos = distanciaKm / kmPorLitro;
const gastoViajem = precoCombustivel * kmPorLitro;

console.log("você gastou R$" + gastoViajem.toFixed(2) + " na sua viajem");

// Arredondamento do numero - .toFixed(2)




