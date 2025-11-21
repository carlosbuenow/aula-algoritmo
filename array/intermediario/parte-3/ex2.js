const alunos = [
    { nome: "Bruno", idade: 22, curso: "Nutrição"},
    { nome: "Carla", idade: 18, curso: "Informática"},
    { nome: "Daniel", idade: 15, curso: "Informática"},
    { nome: "Eva", idade: 17, curso: "Informática"},
    { nome: "Felipe", idade: 23, curso: "Administração"}
]

for (let i = 0; i < alunos.length; i++){
    if(alunos[i].idade < 18){
        if (alunos[i].curso === "Informática"){
            console.log(alunos[i]);
        }
    }
}