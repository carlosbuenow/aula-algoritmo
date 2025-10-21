import input from 'readline-sync';

let num1 = input.questionInt("Digite o 1° Número: ");
let num2 = input.questionInt("Digite o 2° Número: ");

let mult1 = num1 * 10;
let mult2 = num2 * 10;
let div1 = num1 / 2;
let div2 = num2 / 2;
let soma1 = mult1 + div2;
let soma2 = mult2 + div1;

if(num1<num2){
}if(soma1 % 2 == 0){
    console.log("O resultado é par: ", soma1);
    }else{
        if(soma1 %2 == 1){
        console.log("O resultado é ímpar: ", soma1);
        }else{
            if(num2<num1){
                if(soma2 %2 == 0){
                console.log("O resultado é par: ", soma2);
                }else{
                    if(soma2 %2 == 1){
                     console.log("O resultado é ímpar: ", soma2);}
            }
        }
    }
}

