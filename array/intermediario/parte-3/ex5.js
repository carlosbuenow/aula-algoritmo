import input from 'readline-sync'

const usuarios = [
    {nome: "Ana", senha: "senha123"},

    ]
    
let nome = ""
let senha = ""

let numero = -1
while(numero != 0){
    nome = input.question("Digite seu nome de usuário: ");
    senha = input.question("Digite sua senha: ")  
    if(nome === usuarios[0].nome ){
    }else{
        console.log("Usuário não cadastrado.");
        
    }if(senha === usuarios[0].senha){
        console.log(`Bem-vindo, ${usuarios[0].nome}!`);
    }else{
        console.log("Senha incorreta.");
    }
    numero = input.questionInt("Digite 0 para sair ou 1 para continuar: ")
}