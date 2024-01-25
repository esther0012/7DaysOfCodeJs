var text = "";

function iniciar() {
    var nome = document.getElementById("day-2__nome").value;
    var idade = document.getElementById("day-2__idade").value;
    var ling = document.getElementById("day-2__linguagem").value;

    text = `<p>Ola ${nome}, você tem ${idade} anos e está aprendendo ${ling}</p>`;

    text += `<p>Você gosta de estudar ${ling}?</p>`;
    text += "<button class='botao' onclick='respostaPositiva()'>Sim</button>";
    text += "<button class='botao' onclick='respostaNegativa()'>Não</button>";

    document.getElementById("day-2__pergunta").innerHTML = text;
}

function respostaPositiva() {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}

function respostaNegativa() {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
