const produtos = [
    { nome: "Pasta de Amendoim", preco: 30},
    { nome: "Creatina 300g", preco: 60},
    { nome: "Hipercalórico 3kg", preco: 100}
]

function acimade50(produtos){
    // Serve para filtrar os produtos que possuem preço maior que 50 //
    return produtos.filter(produto => produto.preco > 50)
}

console.log(acimade50(produtos))