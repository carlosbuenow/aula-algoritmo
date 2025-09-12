import input from 'readline-sync'

let num1 = input.questionInt("Digite o 1° número: ")
let num2 = input.questionInt("Digite o 2° número: ")
let num3 = input.questionInt("Digite o 3° número: ")

if (num1<num2 && num1<num3 && num2<num3){
    console.log("Os números são: ", num1, ",", num2, "e", num3)
    
} else{
     if(num2<num1 && num2<num3 && num1<num3){
     console.log("Os números são: ", num2, ",", num1, "e", num3)
} else{
 if(num3<num1 && num3<num2 && num2<num1){
    console.log("Os números são: ", num3, ",", num2, "e", num1)
}
if (num1>num2 && num1>num3 && num2<num3){
    console.log("Os números são: ", num1, ",", num2, "e", num3)
    
} else{
     if(num2>num1 && num2>num3 && num1<num3){
     console.log("Os números são: ", num1, ",", num3, "e", num2)
} else{
 if(num3>num1 && num3>num2 && num2<num1){
    console.log("Os números são: ", num2, ",", num1, "e", num3)
}}}}}