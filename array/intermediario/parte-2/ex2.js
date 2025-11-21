const produtos = [
    { nome: 'Notebook', preco: 2500, estoque: 13 },
    { nome: 'Smartphone', preco: 1500, estoque: 4 },
    { nome: 'Tablet', preco: 800, estoque: 5 },
    { nome: 'Monitor', preco: 1200, estoque: 9 },
    { nome: 'Teclado', preco: 200, estoque: 11 }
];

for (let i = 0; i < produtos.length; i++){
    if (produtos[i].estoque > 10){
        console.log(produtos[i])
    }
}