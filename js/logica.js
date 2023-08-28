/*const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;*/

const PAINEIS = document.querySelectorAll(".painel");
const SAIR = document.querySelector(".closeBtn");


function removerClassesAtiva(){
    PAINEIS.forEach((painel) => {
        painel.classList.remove("active");
        //console.log(painel.childNodes)
    });
}
//const removerClassesAtiva = () => {

//};



SAIR.addEventListener('click', () => {
    console.log('teste')
    ipc.send('closeApp');
})

function iniciarPainel(){
    PAINEIS.forEach((painel) => {
        painel.addEventListener("click", () => {
            removerClassesAtiva();
            painel.classList.add("active");

        });
    });
}

iniciarPainel();
