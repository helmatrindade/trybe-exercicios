//Crie erros personalizados.
//Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?

//Utilize o throw new Error e o bloco try/catch.

//Evite funções que tenham muitas responsabilidades distintas.

//Caso a pessoa usuária nao preencha nenhum input, ou preencha apenas um input, lance um erro.

//Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função isNan().

//Adicione o texto dos erros no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!

//Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch

const verificarNumero = (value1, value2) => {
    if (!value1 || !value2) {
        throw new Error('Preencha os campos em branco!');
    } 
    if (isNaN(value1) || isNaN(value2)) {
        throw new Error('Os valores devem ser numericos!');
    }
}

const sum = () => {
    try{
        const value1 = document.getElementById('value1').value; //resgatando o valor do input 1
        const value2 = document.getElementById('value2').value; // resgatando o valor do input 2
        verificarNumero(value1, value2);
        const result = Number(value1) + Number(value2); //soma dos inputs
        document.getElementById('result').innerHTML = `Resultado: ${result}`; //atribuindo resultado da soma
    } catch (Error) {
        document.getElementById('result').innerHTML = `Erro: ${Error.message}`;
    } finally {
        document.getElementById('value1').value = ''; //limpando input 1
        document.getElementById('value2').value = ''; // limpando input 2
    }
} 

  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}
