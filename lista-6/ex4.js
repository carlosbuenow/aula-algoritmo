import input from 'readline-sync';

let num = input.questionInt("Digite um número: ")


for(let i = 1; i<=10; i = i + 1){
    console.log(num, "x " + i + " = " + (num * i));
}