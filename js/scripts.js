function encriptar() {
    var textoIngresado = document.getElementById("texto-ingresado").value;
    if (textoIngresado != "") {
        document.getElementById('texto-resultado').style.display = 'none';
        document.getElementById('btn-copiar').style.display = 'block';
        arreglo = codificarTextoIngresado(textoIngresado);
        document.getElementById("resultado-final").innerHTML = pasarATexto();
    } else {
        document.getElementById('resultado-final').innerHTML = textoIngresado;
        document.getElementById('texto-resultado').style.display = 'block';
        document.getElementById('btn-copiar').style.display = 'none';
    }

}

function pasarATexto() {
    var arregloPasadoATexto = "";
    for (var i = 0; i < arreglo.length; i++) {
        arregloPasadoATexto += arreglo[i];
    }
    return arregloPasadoATexto;
}

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function codificarTextoIngresado(texto) {
    var arregloTextoCodificado = [];
    for (var i = 0; i < texto.length; i++) {
        arregloTextoCodificado.push(codificar(texto[i]));
    }
    return arregloTextoCodificado;
}

function codificar(letra) {
    var palabra = "";
    switch (letra) {
        case 'a':
            palabra = "ai";
            break;
        case 'e':
            palabra = "enter";
            break;
        case 'i':
            palabra = "imes";
            break;
        case 'o':
            palabra = "ober";
            break;
        case 'u':
            palabra = "ufat";
            break;
        default:
            palabra = letra;

    }
    return palabra;
}

/* Desencriptar */
function desencriptar() {
    var textoIngresado = document.getElementById("texto-ingresado").value;
    if (textoIngresado != "") {
        document.getElementById('texto-resultado').style.display = 'none';
        document.getElementById('btn-copiar').style.display = 'block';
        arreglo = decodificarTextoIngresado(textoIngresado);
        document.getElementById("resultado-final").innerHTML = pasarATexto();
    } else {
        document.getElementById('resultado-final').innerHTML = textoIngresado;
        document.getElementById('texto-resultado').style.display = 'block';
        document.getElementById('btn-copiar').style.display = 'none';

    }
}

function decodificarTextoIngresado(texto) {
    var arregloTextoDecodificado = [];
    var i = 0;
    while (i < texto.length) {
        arregloTextoDecodificado.push(texto[i]);
        i += decodificar(texto[i]);
    }
    return arregloTextoDecodificado;
}

function decodificar(letra) {
    var saltos = 1;
    switch (letra) {
        case 'a':
            saltos = 2;
            break;
        case 'e':
            saltos = 5;
            break;
        case 'i':
            saltos = 4;
            break;
        case 'o':
            saltos = 4;
            break;
        case 'u':
            saltos = 4;
            break;
        default:

    }
    return saltos;
}

function copiar() {
    var copyText = document.getElementById('resultado-final').innerHTML;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copiado");
    });
}

let arreglo = [];

var button = document.querySelector(".btn-encriptar");
button.onclick = encriptar;

var buttonDesencriptar = document.querySelector(".btn-desencriptar");
buttonDesencriptar.onclick = desencriptar;

var buttonCopiar = document.querySelector(".btn-copiar");
buttonCopiar.onclick = copiar;