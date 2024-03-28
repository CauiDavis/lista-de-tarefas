


function receber() {
    if (document.getElementById("enviar").value == "") {
        alert("Digite algo");
        return;
    }

    let text = document.getElementById("enviar").value;
    let list = document.getElementById("lista").innerHTML;

    list += "<li>" + text + "</li>";

    document.getElementById("lista").innerHTML = list;
    document.getElementById("enviar").value = null;
}