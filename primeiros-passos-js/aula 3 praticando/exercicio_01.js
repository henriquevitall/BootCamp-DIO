/*
        1) Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

        Média = (nota 1 + nota 2 + nota 3) / 3;

        Classificação:
        - Média menor que 5, reprovado;
        - Média entre 5 e 7, recuperação;
        - Média acima de 7, aprovado;
*/

const nota1 = 10;
const nota2 = 3;
const nota3 = 6;
const media = (nota1 + nota2 + nota3) / 3;
console.log('Sua média foi: ' + media);

if (media < 5) {
    console.log('Você foi reprovado!');
} else if (media >= 5 && media <= 7) {
    console.log('Você está em recuperação!');
} else {
    console.log('Parabéns, você foi aprovado!');
}
