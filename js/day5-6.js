var categorias = ["Fruta", "Laticinio", "Bebida", "Carne", "Basico", "Doce"];
var lista = [];

inicio();

function inicio() {
    document.querySelector("#day-5__lista");
    document.getElementById("day-5__lista").innerHTML = "";
    var text = "<p>Favor adicionar um produto a lista de compras:</p>";
    text += "<input type='text' id='produto'>";
    text += "<p>Selecione em qual categoria esse produto se encaixa</p>";
    text += "<select name='categoria' id='categoria'>";
    for (var l in categorias)
        text += "<option value='" + categorias[l] + "'>" + categorias[l] + "</option>";
    text += "</select>"

    text += "<div><button onclick='adicionarItems()'>Adicionar</button>";
    text += "<button onclick='excluirItem()'>Excluir</button>";
    text += "<button onclick='exibirLista()'>Finalizar</button></div>"

    document.getElementById("day-5__lista").innerHTML = text;
}

function adicionarItems() {
    var produto = document.getElementById("produto").value;
    var categoria = document.getElementById("categoria").value;

    var item = { "produto": produto, "categoria": categoria };

    lista.push(item);
    console.log(lista);

    document.getElementById("produto").value = "";
    var p = document.createElement("p");
    p.textContent = produto + " adicinado na lista!!";
    document.getElementById("day-5__lista").appendChild(p);
}

function exibirLista() {
    var categoriasListadas = [];
    var text = "<h4>Lista de produtos</h4>";

    for (var l in lista) {
        if (!categoriasListadas.includes(lista[l].categoria))
            categoriasListadas.push(lista[l].categoria);
    }

    for (var a in categoriasListadas) {
        text += "<ul>" + categoriasListadas[a] + "</ul>";
        for (var i in lista) {
            if (lista[i].categoria == categoriasListadas[a]) {
                text += "<li>" + lista[i].produto + "</li>";
            }
        }
    }

    text += "<button class='botao' onclick='inicio()'>Adicionar mais items</button>"

    document.getElementById("day-5__lista").innerHTML = text
}

function excluirItem() {
    var produto = document.getElementById("produto").value;
    var p = document.createElement("p");

    if (lista.length === 0) {
        p.textContent = "A lista esta vazia!!!";
        document.getElementById("day-5__lista").appendChild(p);
    } else {
        for (var l in lista) {
            if (lista[l].produto) {
                lista.splice(lista[l], 1);
                p.textContent = produto + " Excluido!!!";
                document.getElementById("day-5__lista").appendChild(p);
            }
        }
    }
}