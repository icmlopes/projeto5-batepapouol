const adMsg = [
    {nome: "Qual seu nome?"}
]

function enviarMensagem(){
    const novaMensagem = Document.querySelector("input").value;

    const adMsg = {
        nome: novaMensagem;
    }
}