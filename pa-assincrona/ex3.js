import input from 'readline-sync';

let soma = 0;

for(let contador = 0; contador < 5; contador++){
    let numero = input.questionInt("Digite o" + (contador + 1) + "º número: ");
    soma = soma + numero;
     
}
console.log("A soma dos 5 números é: ", soma);