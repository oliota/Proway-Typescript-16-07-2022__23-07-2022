
import { Aluno } from "./Aluno.js";
import { Pessoa } from "./Pessoa.js"
import { Professor } from "./Professor.js";


let nome:string="Rubem"
 
let pessoa1 = new Pessoa("Rubem",33)
//pessoa1.altura=1.8
console.log("Pesosa 1 =>", pessoa1);
console.log("Pessoa 1 +>",pessoa1.apresentar());

console.log("Pessoa 1 stringficada ", JSON.stringify(pessoa1));



let aluno1 = new Aluno("Fulano",18,"banco de dados",['javascript','typescript','html'])

console.log(aluno1.apresentar());
console.log(aluno1.exporPreferencias());
console.table(aluno1.listarHabilidades())
console.log(aluno1.listarHabilidades());

let professor1 = new Professor("Alicio",30,['Willian','Gustavo','Rafael'])
professor1.nome="Alicio da Silva"

console.log(professor1.apresentar());
console.log(professor1.verificarMaiorIdade()?"É de maior":"É de menor"  );
 professor1.fazerChamada();

 let professores:Array<Professor>= new Array<Professor>()
console.log(professores);

 professores.push(professor1) 
 console.log(professores);

 professores.push( new Professor("Rubem",33,['Willian','Gustavo','Rafael']))
 console.log(professores);








