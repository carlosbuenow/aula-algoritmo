
const alunos = [
    { nome: "Ana", nota1: 8, nota2: 7},
    { nome: "Bruno", nota1: 6, nota2: 5},
    { nome: "Carla", nota1: 9, nota2: 8},
    { nome: "Daniel", nota1: 4, nota2: 6},
    { nome: "Eva", nota1: 7, nota2: 9}
]

for (let i = 0; i < alunos.length; i++){
    let media = (alunos[i].nota1 + alunos[i].nota2) / 2;
    if (media >= 6) {
        console.log("Aluno aprovado:");
        console.log(alunos[i]);
    }
}