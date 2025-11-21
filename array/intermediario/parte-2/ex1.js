const pessoas = [
    { nome: 'Ana', idade : 32, profissão: 'Desenvolvedora'},
    { nome: 'Felipe', idade: 25, profissão: 'Designer'},
    { nome: 'Leticia', idade: 29, profissão: 'Gerente de Projetos'},
    { nome: 'João', idade: 35, profissão: 'Desenvolvedor'},
    { nome: 'Lucas', idade: 28, profissão: 'Analista de Sistemas'}
]

for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i].idade > 30){
        console.log(pessoas[i].nome);
    }
}