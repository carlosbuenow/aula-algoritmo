const usuarios = [
    {nome: "Carlos", email: "carlosbuenozzz@gmail.com", idade: 19},
    {nome: "Felipe", email: "felipezzzlalk@hotmail.com", idade: 15},
    {nome: "Bia", email: "Bia39444@hotmail.com", idade: 16},
    {nome: "Giovanna", email: "gigi37201@gmail.com", idade: 21}];

for(let i = 0; i < usuarios.length; i++){
    if(usuarios[i].idade >= 18){
        console.log(usuarios[i])
    }
}