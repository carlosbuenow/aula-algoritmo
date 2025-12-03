const frutas = ['maça', 'banana', 'goiaba','maça', 'uva', 'uva',' laranja','goiaba','banana']

function contagem(frutas){
    // Constante para armazenar a contagem // 
    const contadorfrutas = {}
    // Serve para percorrer todo o array //
    for(const elemento of frutas){
    // Verifica se já existe, e adiciona + 1 //
        if(contadorfrutas[elemento]){
            contadorfrutas[elemento] = contadorfrutas[elemento] + 1;
        }
    // Se apenas existir 1, assim ficará //   
        else{
            contadorfrutas[elemento] = 1;
        }
    }
    // Realiza o retorno da constante após o processo// 
    return contadorfrutas;
}
console.log(contagem(frutas))