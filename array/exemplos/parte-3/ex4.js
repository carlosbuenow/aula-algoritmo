const alunos = [
    {nome: "Ana", nota: 8},
    {nome: "Bruno", nota: 5},
    {nome: "Julio", nota: 9},
    {nome: "Lucas", nota: 4},
    {nome: "Fernanda", nota: 7}
];

for(let i = 0; i < alunos.length; i++){
    if(alunos[i].nota >= 6){
        console.log(alunos[i]);
    }
}