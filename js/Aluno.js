import { Pessoa } from "./Pessoa.js";
export class Aluno extends Pessoa {
    constructor(nome, idade, camadaPreferida, linguagens) {
        super(nome, idade);
        this.camadaPreferida = camadaPreferida;
        this.linguagens = linguagens;
    }
    exporPreferencias() {
        return `Eu me identifico com ${this.camadaPreferida}`;
    }
    listarHabilidades() {
        return this.linguagens;
    }
}
