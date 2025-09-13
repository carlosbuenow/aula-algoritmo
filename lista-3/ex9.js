import input from 'readline-sync';

let num1 = input.questionInt("Digite o 1° Número: ");
let num2 = input.questionInt("Digite o 2° Número: ");
let num3 = input.questionInt("Digite o 3° Número: ");
let num4 = input.questionInt("Digite o 4° Número: ");

let resp1 = num1 + num2;
let resp2 = num3 - num4;
let resp3 = resp1 + resp2;

if(resp3>10){
    console.log("Resultado é maior que dez: ", resp3);
}else{
    console.log("Resultado é menor ou igual a dez: ", resp3);
}
