import input from 'readline-sync';

let num = input.questionInt("Digite um número: ")

if(num % 2 == 0){
   for(let num2 = num; num2<=20; num2 = num2 + 2){
    console.log(num2)
   }
}