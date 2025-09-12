import input from 'readline-sync'

let num1 = input.questionInt("Digite o 1° número: ")
let num2 = input.questionInt("Digite o 2° número: ")

if (num1<num2) {
    console.log("Os números são: ", num1, ",", num2 )
    
} else {
    console.log("Os números são: ", num2, ",", num1)
    
}

