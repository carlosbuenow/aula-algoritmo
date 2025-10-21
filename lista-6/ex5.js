import input from 'readline-sync';

let num1 = input.questionInt("Digite o 1° número: ")
let num2 = input.questionInt("Digite o 2° número: ")
let num3 = input.questionInt("Digite o 3° número: ")

if(num1>num3 && num2>num3){
    if(num1<num2){
        num1 = num1 + 1;
        while(num1<=num2){
            console.log(num1);
            num1++;
    }
}
}else{
    num2 = num2 + 1;
    while(num2<=num1){
        console.log(num2);
        num2++;;
    }
}if(num1>num2 && num3>num2);
    if(num2<num3){
        num2 = num2 + 1;
        while(num2<=num3){
            console.log(num2);
            num2++;
        }
    }else{
        num3 = num3 + 1;
        while(num3<=num2){
            console.log(num3);
            num3++;
        }
    }if(num3>num2 && num1>num2){
        if(num3<num1){
            num3 = num3 + 1;
            while(num3<=num1){
                console.log(num3);
                num3++;
            }
        }
    }else{
        num1 = num1 + 1;
        while(num1<=num3){
            console.log(num1);
            num1++;
        }
    }