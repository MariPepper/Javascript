/*Função para chamar dentro de um script, depois do copyFormData, e depois do showFormData. */
function limitPhoneInput() {
    var contatoInput = document.getElementById("contato");
    contatoInput.addEventListener("input", function() {
        // Remove all non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');
        // Limit the input to 9 digits
        this.value = this.value.slice(0, 9);
    });
}

/* Não usar porque o copiar e colar ainda é possível. */
function onlyNumbers(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

/* Função alternativa. */
function checkBox() {
    var newsletter = document.getElementById('newsletter').checked ? "Sim" : "Não";
    localStorage.setItem("newsletter", newsletter);
    var newsletterCheckbox = document.getElementById('newsletter');
    if (newsletterCheckbox) {
        var newsletter = newsletterCheckbox.checked ? "Sim" : "Não";
        localStorage.setItem("newsletter", newsletter);
    }
}

function checkBox() {
    if (document.getElementById('newsletter').checked) {
        newsletter = "Sim";
    } else {
        newsletter = "Não";
    }
    localStorage.setItem("newsletter", newsletter);
}

/* Não dá para usar com localStorage, porque os valores mesmo errados são enviados. */
function reporTudo(){
    document.getElementById("formulario").reset();
}