import input from 'readline-sync';

let num1 = input.questionInt("Digite um número: ");
let num2 = input.questionInt("Digite o segundo número: ");

num1 = num1 + 1;
num2 = num2 + 1;

while(num1<num2){
    console.log(num1)
        num1++;
}
while(num2<num1){
    console.log(num2)
    num2++;
}
