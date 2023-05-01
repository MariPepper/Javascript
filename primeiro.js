var x;

function janela() {
    var i;
    var coluna = document.getElementsByClassName('coluna');
    x = document.body.clientWidth;

    for (i = 0; i < coluna.length; i++) {
        //for (i = 0; i < coluna - length; i++) {
        if (x <= 620) {
            coluna[i].style = 'clear:both;width:100%';
        } else {
            coluna[i].style = 'float:left;width:45%';
        }
    }
}

function verificar() {
    var i, cor, password, confirmar;
    var campo = document.getElementsByTagName('input');
    password = campo[8].value.trim();
    confirmar = campo[9].value.trim();

    if (password != confirmar & password.length >= 6) {
        cor = 'background-color:rgb(230, 180, 193);';
    } else {
        cor = 'background-color:rgb(255, 255, 255);';
    }
    campo[8].style = campo[9].style = cor;
    //alert(campo.length);
}

function validarEmail() {
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
        return true; // allow empty field
    } else if (!emailPattern.test(email)) {
        alert("Por favor introduza um email válido.");
        return false;
    }
    return true;
}

function guardarEmail(){
    localStorage.setItem("email", document.getElementById("email").value);
}

function checkBox() {
    var newsletter = document.getElementById('newsletter').checked ? "Sim" : "Não";
    localStorage.setItem("newsletter", newsletter);
    var newsletterCheckbox = document.getElementById('newsletter');
    if (newsletterCheckbox) {
        var newsletter = newsletterCheckbox.checked ? "Sim" : "Não";
        localStorage.setItem("newsletter", newsletter);
    }
}

function reporCheckBox() {
    var newsletterCheckbox = document.getElementById('newsletter');
    if (newsletterCheckbox) {
        newsletterCheckbox.checked = false;
        localStorage.setItem("newsletter", "Não");
    }
}

function copiarInfo() {
    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("morada", document.getElementById("morada").value);
    localStorage.setItem("data", document.getElementById("data").value);
    var genero = document.querySelector('input[id="feminino"]:checked') ? 'F' :
        document.querySelector('input[id="masculino"]:checked') ? 'M' : '';
    localStorage.setItem("genero", genero);
    localStorage.setItem("regiao", document.getElementById("regiao").value);
    localStorage.setItem("contato", document.getElementById("contato").value);
    localStorage.setItem("arquivo", document.getElementById("arquivo").value);
    localStorage.setItem("assunto", document.getElementById("assunto").value);
    localStorage.setItem("mensagem", document.getElementById("mensagem").value);
    localStorage.setItem("newsletter", document.getElementById("newsletter").checked);
}

function mostrarInfo() {
    var nome = localStorage.getItem("nome");
    var morada = localStorage.getItem("morada");
    var data = localStorage.getItem("data");
    var genero = localStorage.getItem("genero");
    var regiao = localStorage.getItem("regiao");
    var contato = localStorage.getItem("contato");
    var arquivo = localStorage.getItem("arquivo");
    var assunto = localStorage.getItem("assunto");
    var mensagem = localStorage.getItem("mensagem");
    var newsletter = localStorage.getItem("newsletter");
    var nascimento = new Date(data).getFullYear();
    var ano = new Date().getFullYear();
    var idade = ano - nascimento;
    var informacao =
        "Nome: " + nome + "\n" +
        "Morada: " + morada + "\n" +
        "Data de Nascimento: " + idade + "\n" +
        "Género: " + genero + "\n" +
        "Região: " + regiao + "\n" +
        "Telefone: " + contato + "\n" +
        "Ficheiro: " + arquivo + "\n" +
        "Assunto: " + assunto + "\n" +
        "Mensagem: " + mensagem + "\n" +
        "Deseja receber a nossa Newsletter? " + newsletter;
    exemplo.value = informacao;
}

function mostrarInfo2() {
    var nome = localStorage.getItem("nome");
    var morada = localStorage.getItem("morada");
    var data = localStorage.getItem("data");
    var genero = localStorage.getItem("genero");
    var regiao = localStorage.getItem("regiao");
    var contato = localStorage.getItem("contato");
    var email = localStorage.getItem("email");
    var arquivo = localStorage.getItem("arquivo");
    var assunto = localStorage.getItem("assunto");
    var mensagem = localStorage.getItem("mensagem");
    var newsletter = localStorage.getItem("newsletter");
    var nascimento = new Date(data).getFullYear();
    var ano = new Date().getFullYear();
    var idade = ano - nascimento;
    var informacao =
        "Nome: " + nome + "\n" +
        "Morada: " + morada + "\n" +
        "Data de Nascimento: " + idade + "\n" +
        "Género: " + genero + "\n" +
        "Região: " + regiao + "\n" +
        "Telefone: " + contato + "\n" +
        "Email: " + email + "\n" +
        "Ficheiro: " + arquivo + "\n" +
        "Assunto: " + assunto + "\n" +
        "Mensagem: " + mensagem + "\n" +
        "Deseja receber a nossa Newsletter? " + newsletter;
    t3.value = informacao;
}
