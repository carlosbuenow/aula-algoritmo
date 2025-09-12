import input from 'readline-sync'

let Tabuada = input.questionInt("Digite um número:")

let resp1 = Tabuada * 1
let resp2 = Tabuada * 2
let resp3 = Tabuada * 3
let resp4 = Tabuada * 4
let resp5 = Tabuada * 5
let resp6 = Tabuada * 7
let resp7 = Tabuada * 7
let resp8 = Tabuada * 8
let resp9 = Tabuada * 9
let resp10 = Tabuada * 10



if(Tabuada<10){
console.log("-----------",Tabuada,"-----------");
console.log('1 x', Tabuada, "=", resp1);
console.log('2 x', Tabuada, "=", resp2);
console.log('3 x', Tabuada, "=", resp3);
console.log('4 x', Tabuada, "=", resp4);
console.log('5 x', Tabuada, "=", resp5);
console.log('6 x', Tabuada, "=", resp6);
console.log('7 x', Tabuada, "=", resp7);
console.log('8 x', Tabuada, "=", resp8);
console.log('9 x', Tabuada, "=", resp9);
console.log('10 x', Tabuada, "=", resp10);
}
