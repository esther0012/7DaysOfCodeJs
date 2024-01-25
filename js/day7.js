var text = "";

function verificarValorPreenchido(valor1, valor2) {
    if (valor1 == "" || valor2 == "") 
        return true; 
    return false;
}

function somar() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    if (verificarValorPreenchido(valor1, valor2)) {
        text = "<p> Favor preencher os campos com os valores<p>";
        imprimirResultado(text);
    } else {
        var soma = Number(valor1) + Number(valor2);
        text = `<p>${valor1} + ${valor2} = ${soma}</p>`;
        imprimirResultado(text);
        limparInput();
    }
}

function subtrair() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    if (verificarValorPreenchido(valor1, valor2)) {
        text = "<p> Favor preencher os campos com os valores<p>";
        imprimirResultado(text);
    } else {
        var sub = Number(valor1) - Number(valor2);
        text = `<p>${valor1} - ${valor2} = ${sub}</p>`;
        imprimirResultado(text);
        limparInput();
    }
}

function multiplicar() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    if (verificarValorPreenchido(valor1, valor2)) {
        text = "<p> Favor preencher os campos com os valores<p>";
        imprimirResultado(text);
    } else {
        var mult = Number(valor1) * Number(valor2);
        text = `<p>${valor1} * ${valor2} = ${mult}</p>`;
        imprimirResultado(text);
        limparInput();
    }
}

function dividir() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    if (verificarValorPreenchido(valor1, valor2)) {
        text = "<p> Favor preencher os campos com os valores<p>";
        imprimirResultado(text);
    } else {
        var divid = Number(valor1) / Number(valor2);
        text = `<p>${valor1} / ${valor2} = ${divid}</p>`;
        imprimirResultado(text);
        limparInput();
    }
}

function imprimirResultado(text) {
    document.getElementById("resultado").innerHTML = text;
}

function limparInput() {
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
}