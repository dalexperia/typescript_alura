import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Form não existe, favor verificar');
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importarDados();
    });
}
else {
    throw Error('Botao não encontrado');
}
