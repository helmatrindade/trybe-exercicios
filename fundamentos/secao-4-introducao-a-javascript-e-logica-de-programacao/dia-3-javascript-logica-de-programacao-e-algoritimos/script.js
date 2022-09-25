//numero fatorial

let number = 1;

for( let index = 10; index > 0; index -= 1){
    number *= index;
}
console.log(number);

//Inverter palavra

let word = 'tryber';
let newWord = '';
for(let index = 0; index < word.length; index += 1){
    newWord += word[word.length - 1 - index];
}
console.log(newWord);

