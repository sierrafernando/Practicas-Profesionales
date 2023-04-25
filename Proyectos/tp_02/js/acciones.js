function $(id) {

    return document.getElementById(id);

}


function sumar() {

    $('cantidad').value = parseInt($('cantidad').value) + 1;

}


function restar() {

    var cantidadItems = parseInt($('cantidad').value);

    var nuevoValor = (cantidadItems)

        ? cantidadItems - 1

        : 0;


    $('cantidad').value = nuevoValor;

}