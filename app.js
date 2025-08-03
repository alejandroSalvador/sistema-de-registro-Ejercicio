let numSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//funcion 1
function asignarTextElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//funcion 2
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numSecreto)
    console.log(typeof(numSecreto))
    console.log(numeroDeUsuario)
    */
    console.log("Intentos realizados: "+intentos);
    if (numSecreto === numeroDeUsuario) {// === igual en valor y tipo de dato
        asignarTextElemento('p', `Acertaste el número! en ${intentos} ${intentos === 1 ? ' vez' : ' veces'} `)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numSecreto) {
            asignarTextElemento('p', 'El número secreto es menor')
            intentos++;
        } else {
            asignarTextElemento('p', 'El número secreto es mayor')
            intentos++;
        }
        limpiarCaja()
    }
    return;
}

//funcion 2
function generarNumSecreto() {
    let numeroGenerado = Math.floor((Math.random() * numeroMaximo) + 1);
    console.log("Lista: [" + listaNumerosSorteados+"]")

    //Si ya están sorteados todos los valores, salir del juego
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextElemento('p','Ya se sortearon todos los números posibles! ');
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {//recorrer el arreglo y ver si existe el valor dentro del arreglo
            return generarNumSecreto();//recursividad 
        } else {
            //guardar el numero generado en la lista
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }


}
//funcion 4
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    // document.getElementById('valorUsuario').value;
    //let valorCaja = document.querySelector('#valorUsuario')
    //valorCaja.value='';
}
//funcion 5
function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de inicio de intervalos
    //Generar el número aleatorio    
    //Inicializar el número de intentos
    condicionesIniciales()
    //deshabilitar el botón de nuevo juego


}
//funcion 1
function condicionesIniciales() {
    asignarTextElemento('h1', 'Juego del número secreto!');
    asignarTextElemento('p', `Indica un número del 1 al ${numeroMaximo}`)
    numSecreto = generarNumSecreto();
    intentos = 1;
    console.log('Numero secreto: '+numSecreto)
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
//test

