let user = { name: "" };
const sentMessage = [
    {
        from: "",
        to: "todos",
        text: "",
        type: "",
        time: ""
    }
]
let mensagem = [];
let participantes = [];

function iniciarChat() {
    while (!user.name) {
        user.name = prompt("Qual o seu nome?");
    }
    console.log(user.name);
}

askUserName();

function askUserName() {
    iniciarChat();
    const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", user);
    promessa.then(beginChat);
    promessa.catch(userError);
}

function beginChat() {
    loadMessage();
    atualizarMensagem();
    atualizarUsuarios();
    
    const descer = document.querySelector('.chat')
    descer.scrollIntoView();
}

function userError() {
    alert("Nickname já existente, tente outro...");
    return iniciarChat();
}

/* let horas = getHours(); */ /* vai informar o horário da msg de acordo com o horário local em 00:00:00 */


/* Buscar usuários existentes */
function buscarUsuario() {
    const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");

    promessa.then(processarParticipantes);
    promessa.catch(reloadChat);
}
buscarUsuario();

/* Carregar mensagens existentes */
function loadMessage() {
    const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    promessa.then(processMessage)
}


function processMessage(answer) {
    for (let i = 0; i < answer.data.lenght; i++) {
        const message = answer.data[i];
        answer.push;
    }
}
processMessage();

function enviarMsg() {
    const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", sentMessage);
    promessa.then(loadMessage);
    promessa.catch(reloadChat);
}

/* function processarParticipantes(resposta) {
    participantes = resposta.data;

};
processarParticipantes(); */

function reloadChat() {
    window.location.reload();
    alert("Iih, caiu! =/");
}

function atualizarMensagem() {
    setInterval(loadMessage, 3000)
};
function atualizarUsuarios() {
    setInterval(buscarUsuario, 5000)
};

function renderizarMensagem(){
    const todasMsg = document.querySelector(".chat");
    todasMsg.innerHTML = "";

    for(let i = 0; i < mensagem.length; i++){
        todasMsg;innerHTML += `
        <li class="mensagem">
            <span><span class="horario">(${mensagem[i].time})</span></span>
        </li>`
}
}
renderizarMensagem();

