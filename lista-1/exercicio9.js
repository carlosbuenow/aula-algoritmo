import input from 'readline-sync'

let num = input.questionInt("Digite um número:");

let resposta = (num-3)+num

console.log("O resultado final é: ", resposta);