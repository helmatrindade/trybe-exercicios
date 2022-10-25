//Exercicios
//Nova pessoa contratada

const pessoa = (nome) => {
  let email = nome.replace(/\s/g,'').toLowerCase();
  return {nome, email:`${email}@trybe.com`};
}
//console.log(pessoa('Pedro Guerra'));


const newEmployees = (id) => {
  const employees = {
    id1: id('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: id('Luiza Dumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3:id('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
  
};
console.log(newEmployees(pessoa));



//Sorteador de loteria

const numeroAleatorio = () => {         
    const num = Math.floor((Math.random() * 5) + 1);
    
}

const comparaNumero = (numero, num) => numero === num;
