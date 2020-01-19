var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    ajax.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (ajax.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = ajax.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    ajax.send();
});
