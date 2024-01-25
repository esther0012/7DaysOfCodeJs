var exerc3 = document.querySelector("#enviar-exerc3");
var nome = "";
var linguagem = [];
var area = "";
var especFullstack = "";


exerc3.addEventListener('click', function () {
    document.getElementById("day-3__pergunta").innerHTML = perguntarArea();
});

function perguntarArea() {
    nome = document.getElementById("day-3__nome").value;
    var text = "<p>Ola " + nome + "!!</p>";
    text += "<p> Qual a area vc gostaria de seguir?</p>";
    text += "<div class='input__radio'><input type='radio' name='verificarArea' valeu='front-end' id='front-end'>Front-end</div>";
    text += "<div class='input__radio'><input type='radio' name='verificarArea' valeu='back-end'  id='back-end'>Back-end </div>";
    text += "<button onclick='verificarArea()'>Confirmar</button>";
    return text;
}

function verificarArea() {
    var frontend = document.getElementById("front-end").checked;
    var backend = document.getElementById("back-end").checked;
    var text = "";

    if (frontend) {
        area = "Front-end";
        text = "<p>Legal, então voce prefere front-end, qual linguagem gostaria de aprender?</p>";
        text += "<div class='input__radio'><input type='radio' name='verificarLing' valeu='react' class='varificar' id='react'>React</div>";
        text += "<div class='input__radio'><input type='radio' name='verificarLing' valeu='vue' class='varificar' id='vue'>Vue</div>";
        text += "<button onclick='verificarLingFront()'>Confirmar</button>";
        document.getElementById("day-3__pergunta").innerHTML = text;
    } else if (backend) {
        area = "Back-end";
        text = "<p>Legal, então voce prefere back-end, qual linguagem gostaria de aprender?</p>";
        text += "<div class='input__radio'><input type='radio' name='verificarLing' valeu='c#' id='c#'>C#</div>";
        text += "<div class='input__radio'><input type='radio' name='verificarLing' valeu='java' id='java'>Java</div>";
        text += "<button onclick='verificarLingBack()'>Confirmar</button>";
        document.getElementById("day-3__pergunta").innerHTML = text;
    }
}

function verificarLingFront() {
    var react = document.getElementById("react").checked;
    var vue = document.getElementById("vue").checked;

    if (react) especializarFullstack("React");
    else if (vue) especializarFullstack("Vue");
}

function verificarLingBack() {
    var c = document.getElementById("c#").checked;
    var java = document.getElementById("java").checked;

    if (c) especializarFullstack("C#");
    else if (java) especializarFullstack("Java");
}

function especializarFullstack(ling) {
    linguagem.push(ling);
    var text = `<p>Voce gostaria de se epecializar em ${ling}, ou seguir para Fullstack?</p>`;
    text += `<div class='input__radio'><input type='radio' name='especFullstack' valeu='especializar' id='especializar'>Especializar em ${ling}</div>`;
    text += "<div class='input__radio'><input type='radio' name='especFullstack' valeu='fullstack' id='fullstack'> FullStack</div>";
    text += "<button onclick='verificarEspecializarFullstack()'>Confirmar</button>";
    document.getElementById("day-3__pergunta").innerHTML = text;
    console.log(linguagem);
}

function verificarEspecializarFullstack() {
    especializar = document.getElementById("especializar").checked;
    fullstack = document.getElementById("fullstack").checked;
    var text = "";

    if (especializar) {
        text = `<p>Continue se especializando em ${linguagem} para dominar a área de ${area}!</p>`;
        especFullstack = "Especializar";
    } else if (fullstack) {
        text = `<p>Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!</p>`;
        especFullstack = "tornar Fullstack"
    }
    text += "<button onclick='outrasLings()'>Continuar</button>";

    document.getElementById("day-3__pergunta").innerHTML = text;
}

function outrasLings() {
    var text = `<p>Opa ${nome}, até o momento essas são suas linguaguem escolhidas: ${linguagem}`;
    text += "<p>Informe outras que voce gostaria de aprender:</p>";
    text += "<input type='text' id='novaLing'>";
    text += "<button onclick='addLing()'>Adicionar</button>";
    text += "<button onclick='finalizar()'>Finalizar</button>";

    document.getElementById("day-3__pergunta").innerHTML = text;
}

function addLing() {
    var ling = document.getElementById("novaLing");
    linguagem.push(ling.value);
    outrasLings();
}

function finalizar() {
    var text = `<p>Valeu pela ajudar ${nome}, essas são as informaçoes que coletamos:</p>`;
    text += `<p> Area que prefere: ${area}</p>`;
    text += `<p> Linguagem escolhida: ${linguagem.shift()}</p>`;
    text += `<p> Pretende se ${especFullstack}</p>`;
    text += `<p> Linguaguems que gostaria de aprender tambem: ${linguagem}</p>`;
    document.getElementById("day-3__pergunta").innerHTML = text;
}

