import input from 'readline-sync';

let num = input.questionInt("Digite um número: ")


if(num>20){
    while(num>=1){
        console.log(num)
        num--;
    }
}