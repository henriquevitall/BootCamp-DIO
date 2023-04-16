/*Faça um programa para calcular o valor de uma viagem.

você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - Tipo de combustível que está no carro;
 4 - Gasto médio de combustível por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor gasto para a viagem*/

///////////////////////////////// ** /////////////////////////////////

const precoEtanol = 5.79;
const precoGasolina = 6.65;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitro; 

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log (valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log (valorGasto.toFixed(2));
}
