import input from 'readline-sync'

let N1=input.questionInt("Digite o 1° Número (N1)-->");
let N2=input.questionInt("Digite o 2° Número (N2)-->");

N1 = (N1-2);
N2 = (N2+2);

console.log("resp1=", N1);
console.log("resp2=", N2);