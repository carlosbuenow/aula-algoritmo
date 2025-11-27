const aluno = {
    nome: "Lucas", idade: 19, curso: "Administração"
}

function apresentarAluno(aluno){
    return `Olá, meu nome é ${aluno.nome}, tenho ${aluno.idade} anos e curso ${aluno.curso}.`
}

console.log(apresentarAluno(aluno))

