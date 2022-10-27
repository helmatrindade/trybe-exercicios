const books = require('./exercise1');


// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.use a função filter

const fantasyOrScienceFiction = () => {
 return books.filter((book) =>
  book.genre === 'Ficção Científica' || book.genre === 'Fantasia',
);
}
//console.log(fantasyOrScienceFiction());



// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo. use sa funções filter e sort


const oldBooksOrdered = () => {
  const year = new Date().getFullYear(); // const com o ano atual
  return books.filter((book) => {    //HOF
    return year - book.releaseYear > 60; // subtração do ano atual menos o ano de lançamento do livro, e que seja maior que 60 anos
  }).sort((a, b) => a.releaseYear - b.releaseYear); //Ordenando do menor para o maior.
};
//console.log(oldBooksOrdered());
