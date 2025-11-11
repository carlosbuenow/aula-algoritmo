const pedidos = [
    {produto: "Colher", quantidade: 15, valorUnitário: 1.50},
    {produto: "Garfo", quantidade: 10, valorUnitário: 2.00},
    {produto: "Faca", quantidade: 5, valorUnitário: 3.00}
];

let soma = (a,b) =>{
    return a * b;
};

for(let i = 0; i < pedidos.length; i++){
    console.log(soma(pedidos[i].quantidade,pedidos[i].valorUnitário));
};