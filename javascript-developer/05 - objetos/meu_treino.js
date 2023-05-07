/*Produto de uma loja, com propriedades como nome, preço e quantidade em 
estoque, e métodos para adicionar e remover unidades do estoque.*/

class Produto {
    constructor(nome, preco, quantidadeEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    adicionarAoEstoque(quantidade) {
        this.quantidadeEstoque += quantidade;
        console.log(
            `${quantidade} unidades do produto ${this.nome} adicionadas ao estoque. Novo estoque: ${this.quantidadeEstoque} unidades.`
        );
    }

    removerDoEstoque(quantidade) {
        if (quantidade <= this.quantidadeEstoque) {
            this.quantidadeEstoque -= quantidade;
            console.log(
                `${quantidade} unidades do produto ${this.nome} removidas do estoque. Novo estoque: ${this.quantidadeEstoque} unidades.`
            );
        } else {
            console.log(
                `Não é possível remover ${quantidade} unidades do produto ${this.nome} do estoque, pois só há ${this.quantidadeEstoque} unidades disponíveis.`
            );
        }
    }
}

// Exemplo de uso:
const camiseta = new Produto('Camiseta', 29.9, 100);
camiseta.adicionarAoEstoque(50);
camiseta.removerDoEstoque(30);

const short = new Produto('Short', 39.9, 200);
short.adicionarAoEstoque(70);
short.removerDoEstoque(90);

const calca = new Produto('Calça', 89.9, 100);
calca.adicionarAoEstoque(58);
calca.removerDoEstoque(73);
