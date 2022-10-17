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
