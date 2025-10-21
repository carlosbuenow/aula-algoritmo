import input from 'readline-sync';

let num1 = input.questionInt("Digite o 1° número: ")
let num2 = input.questionInt("Digite o 2° número: ")

if(num1>10 , num2<5){
    console.log(num2, ",",num1);
}else{
    if(num2>10 , num1<5){
        console.log(num1, ",",num2);
    }
}