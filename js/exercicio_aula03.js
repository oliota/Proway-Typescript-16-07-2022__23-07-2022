import { Aluno } from "./Aluno.js";
let alunos = new Array();
let alunoAtual = null;
//historico funciona mais para lista??? object não
console.log("Quando a página carregou a lista estava assim ", alunos);
alunos.push(new Aluno("Fulano", 40, "Java", ['Java', 'Javascript pq tem nome java']));
alunos.push(new Aluno("Zé", 30, "Front", ['Html', 'Css', 'javascript']));
alunos.push(new Aluno("Maria", 20, "Design", ['Corel', 'Photoshop', 'Paint']));
$("#atualizar").hide();
gerarTabela();
function gerarTabela() {
    $("tbody").empty();
    alunos.forEach(aluno => {
        $("tbody").append($("<tr>").append($("<td>", { text: aluno.nome }), $("<td>", { text: aluno.idade }), $("<td>", { text: aluno.camadaPreferida }), $("<td>", { text: aluno.linguagens }), $("<td>").append($("<button>", {
            class: "btn btn-danger btn-sm",
            text: "Excluir",
            click: function () {
                alunos.splice(alunos.indexOf(aluno), 1);
                gerarTabela();
            }
        }), $("<button>", {
            text: "Editar",
            class: "btn btn-primary btn-sm",
            click: function () {
                $("#nome").val(aluno.nome);
                $("#idade").val(aluno.idade);
                $("#camadaPreferida").val(aluno.camadaPreferida);
                $("#linguagens").val(aluno.linguagens);
                $("#adicionar").hide();
                $("#atualizar").show();
                alunoAtual = aluno;
                console.log(alunoAtual);
            }
        }))));
    });
}
$("form").on("submit", function (event) {
    event.preventDefault();
    let nome = String($("#nome").val());
    let idade = Number($("#idade").val());
    let camada = String($("#camadaPreferida").val());
    let listaLinguagens = String($("#linguagens").val()).split(',');
    console.log(nome, idade, camada, listaLinguagens);
    if (alunoAtual == null) {
        alunos.push(new Aluno(nome, idade, camada, listaLinguagens));
    }
    else {
        let itemAtualizado = new Aluno(nome, idade, camada, listaLinguagens);
        alunos[alunos.indexOf(alunoAtual)] = itemAtualizado;
        $("#adicionar").show();
        $("#atualizar").hide();
        alunoAtual = null;
    }
    $("input").val('');
    gerarTabela();
});
