import input from 'readline-sync';

let numero = input.questionInt("Digite um número: ")

numero = numero - 1;

while(numero>=1){
    console.log(numero)
    numero--;
}