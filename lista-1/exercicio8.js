import input from 'readline-sync'

let num1=input.questionInt("Digite o 1° Número:")
let num2=input.questionInt("Digite o 2° Número:")
let num3=input.questionInt("Digite o 3° Número:")

let resp1= num1 +10
let resp2= num2  -5
let resp3= num3  +2

console.log("Resposta:",resp1,",", resp2,",", resp3);
