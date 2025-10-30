import input from 'readline-sync';

let num = input.questionInt("Digite um número: ")

let primo = true;

if(num<=1){
    primo = false
} else{
    for (let i = 2; i < num; i++){
        if(num % i == 0){
            primo = false;
            break;
        }
    }
}

if(primo){
    console.log(`${num} é primo.`)
} else{
    console.log(`${num} não é primo.`)
}