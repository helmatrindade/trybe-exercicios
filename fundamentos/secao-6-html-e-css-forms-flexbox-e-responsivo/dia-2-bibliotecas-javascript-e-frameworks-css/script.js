
function botaoEvento(event){
    event.preventDefault();

}

window.onload = function () {
    const submtBotao = document.querySelector('#submeter');
    submtBotao.addEventListener('click', botaoEvento)
}
