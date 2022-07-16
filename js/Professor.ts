import { Pessoa } from "./Pessoa.js";

export class Professor extends Pessoa {

    listaAlunos: Array<string>

    constructor(nome:string,idade:number,listaAlunos:Array<string>) {
        super(nome,idade)
        this.listaAlunos=listaAlunos
    }

    fazerChamada(){
       this.listaAlunos.forEach(aluno => {
        console.warn(`O aluno(a) ${aluno} esta presente.`)
       });
    }

}

