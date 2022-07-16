export class Pessoa{

    nome:string
    idade:number
    altura:number

    constructor(nome:string,idade:number){
        this.nome=nome
        this.idade=idade
        this.altura=null
    } 

    apresentar():string{
        return `Ola meu nome é ${this.nome} e tenho ${this.idade} anos `
    }

    verificarMaiorIdade():boolean{
        return this.idade>=18
    }



}