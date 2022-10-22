//Parte 1
function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);



//Modifique a estrutura da função para que ela seja uma arrow function
const testingScope = (escopo) => {
    if (escopo === true) {
        var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
      } else {
        var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
        console.log(elseScope);
      }
      console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
    }
  
    testingScope(true);
    


// Modifique as variáveis para que respeitem o escopo onde estão declaradas
const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
      } else {
        let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
        console.log(elseScope);
      }
      console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
    }
  
    testingScope(true);



//Modifique as concatenações para template literals
const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo`;
        console.log(ifScope);
      } else {
        let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
        console.log(elseScope);
      }
    }
  
    testingScope(true);



//Crie uma função que retorne um array em ordem crescente
let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function (a, b){
    return a - b;
})

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//Parte 2
//Exercicio 1
const fatorial = (number) => {
    let result = 1;
    for (let index = 1; index <= number; index += 1){
    result *= index;
    }
   return result;
}

const valor = fatorial(5);
console.log(`Esse é o fatorial ${valor}`);


//Exercicio 2
const longesWord = (frase) => {
  let arrayPalavras = frase.split(' '); // trasnformei em uma array de strings
  let maior = 0;  // contador que vai contar a maior palavra
  let maiorPalavra = ''; // para armazenar a maior palavra
  for (const palavras of arrayPalavras) {
    if (palavras.length > maior) {
      maior = palavras.length;
      maiorPalavra = palavras;
    }
  }
  return maiorPalavra;
}

console.log(longesWord('O dia é maravilhoso'));
