var text = "";
day4Iniciar();

function day4Iniciar(){
    imprimirNaTela("");
    var num = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    console.log(num);
    var chance = 3;
    interacaoTela(chance, num)
}

function verificarChute(chance, num) {
    chance--;
    console.log(chance);
    var chute = document.getElementById("valor").value;
    
    if (chute == num) {
        text = "<p>Mto Bem, voce acertou!!!</p>";
        text += "<button onclick='document.location.reload(true)'>Tentar novamente?</button>";
        imprimirNaTela(text);
    } else if (chance > 0) {
        text = "<p>Voce errou!!</p>";
        interacaoTela(chance, num);
    } else {
        text = `<p> Que pena, o valor correto era ${num}!!`;
        text += "<button onclick='day4Iniciar()'>Tentar novamente</button>";
        imprimirNaTela(text);
    }
}

function interacaoTela(chance, num){
    text += "<input type='text' id='valor'>";
    text += `<button onclick='verificarChute(${chance}, ${num})'>Chutar</button>`;
    text += `<p> Voce tem ${chance}!!</p>`;
    imprimirNaTela(text);
}

function imprimirNaTela(text) {
    document.getElementById("day-4__chute").innerHTML = text;
}
