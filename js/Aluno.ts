import { Pessoa } from "./Pessoa.js"

export class Aluno extends Pessoa {
  

    //nome, idade
    camadaPreferida: string
    linguagens: Array<string>

    constructor(nome: string, idade: number, camadaPreferida: string, linguagens: Array<string>) {
        super(nome, idade)
        this.camadaPreferida=camadaPreferida
        this.linguagens = linguagens
    }

    exporPreferencias():string {
        return `Eu me identifico com ${this.camadaPreferida}`
    }

    listarHabilidades():Array<string> {
        return  this.linguagens 
    }



}