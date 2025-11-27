import input from 'readline-sync'


const nomes = [
    'Ana', 'Daniel', 'Luiz', 'Vitor', 'Giovanna'
]

function receberNomes(nomes){
    // Solicita para digitar um nome //
    let nome = input.question("Digite um nome: ")
    // Verifica se o nome está no array //
    if(nomes.includes(nome)){
        return `O nome ${nome} está na lista.`
    }
    else{
        return `O nome ${nome} não foi encontrado na lista.`
    }
}

console.log(receberNomes(nomes))