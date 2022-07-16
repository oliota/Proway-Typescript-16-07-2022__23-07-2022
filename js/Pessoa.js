export class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.altura = null;
    }
    apresentar() {
        return `Ola meu nome é ${this.nome} e tenho ${this.idade} anos `;
    }
    verificarMaiorIdade() {
        return this.idade >= 18;
    }
}
