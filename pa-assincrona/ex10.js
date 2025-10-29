import input from 'readline-sync';

let num = input.questionInt("Digite um número: ")
let fatorial = 1;
if(num == 0){
    fatorial = 1;
}else{
    for(let i = num; i >1; i--){
        fatorial = fatorial * i;
    }
     console.log(`${num}! = ${fatorial}`)
}