const pessoas = [
    {nome: 'Leandro', idade: 17},
    {nome: 'Vitor', idade: 19},
    {nome: 'Pietra', idade: 21},
    {nome: 'Felipe', idade: 18}
]
function maiorDezoito(pessoas){
    return pessoas.filter(pessoas => pessoas.idade  > 18)
}

console.log(maiorDezoito(pessoas))