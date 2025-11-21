const numeros = [10, 5, 30, 7, 9, 8, 11, 4, 22, 15]; 

let somaPares = 0;
let somaImpares = 0;

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        somaPares += numeros[i];
    } else {
        somaImpares += numeros[i];
    }
}

console.log(`Soma dos números pares: ${somaPares}`);
console.log(`Soma dos números ímpares: ${somaImpares}`);