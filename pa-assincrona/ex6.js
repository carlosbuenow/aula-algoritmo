import input from 'readline-sync';

let qtdAlunos = input.questionInt("Digite a quantidade de alunos: ");
for(let aluno = 0; aluno<qtdAlunos; aluno++){
    console.log("=======================");
    console.log("Aluno: " + (aluno + 1));
    console.log("=======================");
    let somaNotas = 0;
    for(let prova = 0; prova<3; prova++){
        let nota = input.questionInt(`Digite a nota da - prova - ${(prova + 1)}`);
        somaNotas+=nota
    }
    let media = somaNotas / 3;
    if(media>=7){
        console.log("Aluno - ", (aluno + 1), "Média = ", media, "## APROVADO##");
    }else{
        console.log("Aluno - ", (aluno + 1), "Média = ", media, "## REPROVADO ##");
    }
}
console.log("=======================");