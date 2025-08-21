import input from 'readline-sync'

let num1=input.questionInt("Digite o 1° Número: ")
let num2=input.questionInt("Digite o 2° Número: ")

let resp1=num1 - 3;
let resp2=num2 + 2;

let resultadofinal =(resp1+resp2) - 1;

console.log("O Resultado final é:", resultadofinal);