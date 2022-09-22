const a = 10;
const b = 5;
console.log('soma: ' + (a + b));
console.log('subtração: ' + (a -b));
console.log('multiplicação: ' + (a * b));
console.log('divisão: ' + (a / b));
console.log('módulo: ' + (a % b));


const  num1 = 20;
const num2 = 30;
if (num1 > num2){
    console.log('Num1 é maior que num2!');
} else {
    console.log('num2 é maior que num1!');
};

const nume1 = 5;
const nume2 = 20;
const nume3 = 3;
if (nume1 > nume2 && nume1 > nume3){
    console.log('nume1 é maior que nume2 e nume3!');
} else if (nume2 > nume1 && nume2 > nume3){
    console.log('nume2 é maior que nume1 e nume3!');
} else {
    console.log('nume3 é maior que nume1 e nume2!');
};

let nota = 2;
if (nota > 0){
    console.log('positive');
}  else if (nota < 0){
    console.log('negative');
}  else{
    console.log('zero');
}


