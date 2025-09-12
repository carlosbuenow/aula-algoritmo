import input from 'readline-sync'

let num1 = input.questionInt("Digite o 1° Número: ")
let num2 = input.questionInt("Digite o 2° Número: ")

let resp1 = num1 + 5
let resp2 = num2 + 5

if (num1<num2 && resp1>num2){
    console.log("Os valores são: ", resp1, "e", num2)
    console.log("O maior número é: ", resp1)
} else
     if(num2<num1 && resp2>num1){
        console.log("Os valores são: ", resp2, "e", num1)
    console.log("O maior número é: ", resp2)
} else{
 if(num1<num2 && resp1<num2){
    console.log("Os valores são: ", resp1, "e", num2)
    console.log("O maior número é: ", num2)
} else{
    if(num2<num1 && resp2<num1){
    console.log("Os valores são: ", num1, "e", resp2)
    console.log("O maior número é: ", num1)
    }
}}