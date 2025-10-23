import input from 'readline-sync';

let num = input.questionInt("Digite um número: ")
let num2 = num

while(num>=1){
    num2 = num - 1;
    num--;
    if(num %2 == 0){
        console.log(num2, "Par")
    }else(
        console.log(num2, "Ímpar")
    )
}
