const books = require('./exercise1');


// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.use a função filter

const fantasyOrScienceFiction = () => {
 return books.filter((book) =>
  book.genre === 'Ficção Científica' || book.genre === 'Fantasia',
);
}
//console.log(fantasyOrScienceFiction());
