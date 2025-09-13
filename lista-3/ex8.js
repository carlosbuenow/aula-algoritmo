import input from 'readline-sync'

let num = input.questionInt("Digite um número: ")

let resp = num + 5
let resp1 = num + 20

if(num<10 && resp1>25){
        console.log("O resultado é: ", resp1)
}else{
    if(num==10 && resp1>25){
        console.log("O resultado é: ", resp1)
    }
else{
    if(num>10 && resp>25)
        console.log("O resultado é: ", resp)

}}