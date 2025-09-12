import input from 'readline-sync'

let num1 = input.questionInt("Digite o 1° Número:")
let num2 = input.questionInt("Digite o 2° Número:")

if (num1<num2) {
    console.log("O menor número é: ", num1)
    
} else {
    console.log("O menor número é: ", num2)
}