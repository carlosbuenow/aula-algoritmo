const nomes = ["Ana", "Pedro", "Lucas", "Alessandro", "Antonio", "Bruno"]

let contadornomes = 0;

for(let i = 0; i < nomes.length; i++){
    if(nomes[i].charAt(0).toUpperCase() == "A"){
        contadornomes++;
    }
}

console.log("Nomes que começam com A: ", contadornomes);