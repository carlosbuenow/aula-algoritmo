const filmes = [
    { titulo: "O poderoso chefão", ano: 1972, classificacao: 16},
    { titulo: "Toy Story", ano: 1995, classificacao: 0},
    { titulo: "A origem", ano: 2010, classificacao: 14},
    { titulo: "Clube da Luta", ano: 1999, classificacao: 18},
    { titulo: "Interestelar", ano: 2014, classificacao: 10},
    { titulo: "Mad Max: Estrada da Fúria", ano: 2015, classificacao: 16}
]

for(let i = 0; i < filmes.length; i++){
    if(filmes[i].ano > 2010){
        console.log(filmes[i])
    }
}