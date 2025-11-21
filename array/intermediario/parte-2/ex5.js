const clientes = [
    { nome: "João", idade: 28, cidade: "São Paulo" },
    { nome: "Maria", idade: 34, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 22, cidade: "Belo Horizonte" },
    { nome: "Ana", idade: 45, cidade: "Curitiba" },
    { nome: "Lucas", idade: 31, cidade: "São Paulo" }
]

for (let i = 0; i < clientes.length; i++){
    if(clientes[i].cidade == "São Paulo"){
        console.log(clientes[i])
    }
}