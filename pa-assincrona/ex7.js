import input from 'readline-sync';

let numero = -1;
let maior = null;
let menor = null;

while(numero != 0){
    numero = input.questionInt("Digite um número (0 para sair): ");
    if(numero != 0){
        if(maior==null && numero > maior){
            maior = numero;
        }

        if(menor==null && numero < menor){
            menor = numero;
        }
    }
}
if(maior == null){
    console.log("Usuário não digitou os números");
}else{
    console.log(`O maior número è: ${maior}`);
    console.log(`O menor número è: ${menor}`);
}