class ContaBancaria {
    constructor(nomeTitular, saldoInicial) {
        this.nomeTitular = nomeTitular;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(
            `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}.`
        );
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(
                `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}.`
            );
        } else {
            console.log(
                `Saldo insuficiente para realizar o saque de R$${valor}.`
            );
        }
    }
}

// Exemplo de uso:
const minhaConta = new ContaBancaria('João da Silva', 1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
