import input from 'readline-sync';

let totalPagar = 0;
let valor = -1;

while(valor != 0){
    valor = input.questionFloat("Digite um número (0 para sair): R$")
    totalPagar = totalPagar + valor;
}
console.log("Total a pagar: ",totalPagar.toFixed(2));