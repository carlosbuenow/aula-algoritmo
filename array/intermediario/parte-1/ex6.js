import input from 'readline-sync'

const nomes = ["Felipe", "Ana", "Lucas", "Maria", "Pietro"]

let busca = input.question("Digite um nome para buscar: ")

if(nomes.includes(busca)){
    console.log(`O nome ${busca} foi encontrado`)
}
else{
    console.log(`O nome ${busca} não foi encontrado`)
}