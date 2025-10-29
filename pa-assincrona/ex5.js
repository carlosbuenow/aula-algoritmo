import input from 'readline-sync';

let num = input.questionInt("Digite o número para Tabuada: ");
console.log("----- Tabuada do", num, "-----");
for(let i = 1; i<=10; i++){
    console.log(i + " x " + num + " = " + (i * num))
}
console.log("--------------------------")
