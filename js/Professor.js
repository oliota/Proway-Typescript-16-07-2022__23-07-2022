import { Pessoa } from "./Pessoa.js";
export class Professor extends Pessoa {
    constructor(nome, idade, listaAlunos) {
        super(nome, idade);
        this.listaAlunos = listaAlunos;
    }
    fazerChamada() {
        this.listaAlunos.forEach(aluno => {
            console.warn(`O aluno(a) ${aluno} esta presente.`);
        });
    }
}
