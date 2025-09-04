import input from 'readline-sync'

let num1 = input.questionInt("Digite o 1° Número:")
let num2 = input.questionInt("Digite o 2° Número:")
let num3 = input.questionInt("Digite o 3° Número:")

let resp1 = num1 + 5
let resp2 = num2 + 5
let resp3 = num3 + 5

if(resp1>10){
console.log("O resultado 1° número é:", resp1)
}   
if(resp2>10){
    console.log("O resultado do 2° número é:", resp2)
} 
if(resp3>10){
    console.log("O resultado do 3° número é:", resp3)
}
