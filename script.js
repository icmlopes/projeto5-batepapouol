/* const adMsg = [
    {nome: "Qual seu nome?"}
] */
let nickName;
/* let horas = getHours(); */ /* vai informar o horário da msg de acordo com o horário local em 00:00:00 */


function iniciarChat() {
    while (nickName === undefined) {
        nickName = String(prompt("Qual o seu nome?"));
    }
}
iniciarChat();


/* function enviarMensagem(){
    const novaMensagem = Document.querySelector("input").value;

    const adNovaMsg = {
        nome: nickName
    }
    adMsg.push(adNovaMsg);
    console.loog(enviarMensagem);
}
 */