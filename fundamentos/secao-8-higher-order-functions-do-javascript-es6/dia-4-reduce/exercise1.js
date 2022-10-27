// Utilize o reduce para transformar uma matriz em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr)); // concat combina os arrys retornar sem modificar
}
console.log(flatten());
