const pedidos = [
    { produto: 'Camisa', quantidade: 2, precoUnitario: 50 },
    { produto: 'Calça', quantidade: 1, precoUnitario: 100 },
    { produto: 'Tênis', quantidade: 1, precoUnitario: 150 },
    { produto: 'Meias', quantidade: 5, precoUnitario: 10 },
    { produto: 'Boné', quantidade: 3, precoUnitario: 30 }
]

let totalGeral = 0;

for (let i = 0; i < pedidos.length; i++) {
    let totalPedido = pedidos[i].quantidade * pedidos[i].precoUnitario;
    totalGeral += totalPedido;
}

console.log(`Total geral dos pedidos: R$ ${totalGeral}`);