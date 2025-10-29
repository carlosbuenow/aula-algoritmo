import input from 'readline-sync';

let n = input.questionInt("Digite a quantidadde de termos da sequencia de Fibonacci: ");

let a = 1;
let b = 1;
console.log("Sequencia de Fibonacci");

if(n>=1){
    console.log(a);
}
if(n>=2){
    console.log(b);
}
for(let i = 3; i<=n; i++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}