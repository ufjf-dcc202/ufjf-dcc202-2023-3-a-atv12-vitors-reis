
document.entrada.addEventListener('submit', leFormulario);
function leFormulario(event) {

    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.value;

    console.log('fruta: ${fruta} qtd: ${quantidade}');
}