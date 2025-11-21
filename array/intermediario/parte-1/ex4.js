const notas = [2,3,5,4,5]

somanotas = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

media = somanotas / 5;

if(media>=6){
    console.log("Aprovado");
    console.log("A média é: ", media);
}else{
    console.log("Reprovado");
    console.log("A média é: ", media);
}