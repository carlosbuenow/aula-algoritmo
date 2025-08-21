import input from 'readline-sync';

let num1 = input.questionInt("Digite o 1° Número: ");
let num2 = input.questionInt("Digite o 2° Número: ");

let resultado = (num1 - num2) + 10;

console.log("Resultado:", resultado);

