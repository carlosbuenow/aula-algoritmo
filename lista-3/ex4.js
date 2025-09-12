import input from 'readline-sync'

let num1 = input.questionInt("Digite o 1° número: ")
let num2 = input.questionInt("Digite o 2° número: ")
let num3 = input.questionInt("Digite o 3° número: ")

if(num1>num2 && num1>num3){
    console.log("O maior número é: ",num1)
}else{
    if(num2>num1 && num2>num3){
        console.log("O maior número é: ",num2) 
}else{
if(num3>num1 && num3>num2){
console.log("O maior número é: ",num3)
}}
}