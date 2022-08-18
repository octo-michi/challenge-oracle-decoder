function encriptar() {
    var textoIngresado = document.getElementById("texto-ingresado").value;
    if (textoIngresado != "") {
        document.getElementById('muneco').style.display = 'none';
        document.getElementById('resultado').style.display = 'flex';
        arreglo = codificarTextoIngresado(textoIngresado);
        document.getElementById("resultado-final").innerHTML = pasarATexto();
    } else {
        document.getElementById('resultado-final').innerHTML = textoIngresado;
        document.getElementById('muneco').style.display = 'block';
        document.getElementById('resultado').style.display = 'none';
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
        document.getElementById('muneco').style.display = 'none';
        document.getElementById('resultado').style.display = 'flex';
        arreglo = decodificarTextoIngresado(textoIngresado);
        document.getElementById("resultado-final").innerHTML = pasarATexto();
    } else {
        document.getElementById('resultado-final').innerHTML = textoIngresado;
        document.getElementById('muneco').style.display = 'block';
        document.getElementById('resultado').style.display = 'none';
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

    var copy = $('.copy_text').val();
    $('.copy_text').select();
    document.execCommand('copy');
    navigator.clipboard.writeText(copyText).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Copiado al portapapeles',
            text: copy,
            showConfirmButton: false,
            timer: 2000
        });
        document.getElementById("texto-ingresado").value = "";
        document.getElementById("texto-ingresado").focus();
    });
}

let arreglo = [];
document.getElementById('resultado').style.display = 'none';

var button = document.querySelector('.btn-encriptar ');
button.onclick = encriptar;

var buttonDesencriptar = document.querySelector(".btn-desencriptar");
buttonDesencriptar.onclick = desencriptar;

var buttonCopiar = document.querySelector(".resultado__btn");
buttonCopiar.onclick = copiar;