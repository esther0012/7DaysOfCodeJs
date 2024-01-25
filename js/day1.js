
let numeroUm = 1;
let stringUm = "1";
let numeroDez = 10;
let stringDez = "10";
let numeroTrinta = 30;
let stringTrinta = "30";

verificarValores(numeroUm, stringUm);
verificarValores(numeroDez, stringDez);
verificarValores(numeroTrinta, stringTrinta);
verificarValores(numeroUm, stringDez);

var text = `<p>Variaveis: ${numeroUm}, '${stringUm}', ${numeroDez}, '${stringDez}', ${numeroTrinta}, '${stringTrinta}'</p>`
document.getElementById("day-1__resultado").innerHTML = text;

function verificarValores(valor1, valor2) {
    if (valor1 == valor2) resposta(valor1, valor2, " são iguais");
    else resposta(valor1, valor2, " são diferentes");
};

function resposta(valor1, valor2, resultado){
    var secao = document.querySelector("#day-1");
    var p = document.createElement("p");
    p.textContent = "Os valores: " + valor1 + " e " + valor2 + resultado;
    secao.appendChild(p);
}

