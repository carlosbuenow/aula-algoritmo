const pessoas = [
    {nome: "Alessandro", cidade: "São Paulo"},
    {nome: "Fernando", cidade: "Salvador"},
    {nome: "Juan", cidade: "Maranhão"},
    {nome: "Vitor", cidade: "São Paulo"}
]

for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i].cidade === "São Paulo"){
        console.log(pessoas[i]);
    }
}