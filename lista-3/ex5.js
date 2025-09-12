import input from 'readline-sync'

let num1 = input.questionInt("Digite o 1° número: ")
let num2 = input.questionInt("Digite o 2° número: ")
let num3 = input.questionInt("Digite o 3° número: ")

let resp1 = num1 + 5
let resp2 = num2 + 5
let resp3 = num3 + 5

if (num1<num2 && num1<num3) {
    console.log("Os números são: ", "1° - ", resp1, "2° -", num2, "3° - ", num3 )
    
} else {
    if (num2<num1 && num2<num3) {
        console.log("Os números são: ", "1° - ", num1, "2° -", resp2, "3° - ", num3 )
        
    } else {
        if(num3<num1 && num3<num2){
            console.log("Os números são: ", "1° - ", num1, "2° -", num2, "3° - ", resp3 )
        }
        
    }
    
}