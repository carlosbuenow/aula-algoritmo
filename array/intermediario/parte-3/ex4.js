const veiculos = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020, preco: 80000 },
    { marca: "Honda", modelo: "Civic", ano: 2019, preco: 75000 },
    { marca: "Ford", modelo: "Focus", ano: 2018, preco: 70000 },
    { marca: "Chevrolet", modelo: "Cruze", ano: 2021, preco: 85000 },
    { marca: "Volkswagen", modelo: "Jetta", ano: 2020, preco: 78000 }
]

let MaisCaro = veiculos[0];
let MaisAntigo = veiculos[0];

for (let i = 1; i < veiculos.length; i++){
    if(veiculos[i].preco > MaisCaro.preco){
        MaisCaro = veiculos[i];
    }
    if(veiculos[i].ano < MaisAntigo.ano){
        MaisAntigo = veiculos[i];
    }
}

console.log("Veículo mais caro:");
console.log(MaisCaro);

console.log("Veículo mais antigo:");
console.log(MaisAntigo);