
let gameActive = false;
let cartasEmparejadas = [];
let puntosConseguidos = 0;
var cardUnic = document.getElementsByClassName('cardE');
let clics = 0;
let timeMax = 95

let cartas = [0, 0, 1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]
const maxPuntuacion = cartas.maxlength/2


// En esta funcion encederemos/reiniciaremos el juego.
function startGame() {

    // iniciamos variables e imprimimos valores
    gameActive = true;

    puntosConseguidos = 0
    document.getElementById("resultados").innerHTML = "Puntos: "  +puntosConseguidos;

    clics = 0
    document.getElementById("clicksTotales").innerHTML = "Clics: " + clics;

    
    let cartasMezcladas = cartas.sort((a, b) => 0.5 - Math.random())


    // En este for reiniciamos las cartas
    for (let i = 0; i < cardUnic.length; i++) {
        let valor = document.getElementById(`${i}`)
        valor.value = cartasMezcladas[i]
        valor.disabled = false
        valor.innerHTML = ""
        valor.style = "background-color:rgb(233, 217, 72)"


    }
 


// creamos el temporizador y le metemos una if para deshabilitar todas las cartas cuando el cronomtero llegue a 0
function Temporizador(inicio, final){
    let id = document.getElementById("timer")
    this.inicio = inicio;
    this.final = final;
    this.contador = this.inicio;
    
    this.conteoSegundos = function(){
        if (this.contador== this.final) {
            conteoSegundos = null;
            id.innerHTML = "Tiempo Finalizado"
            for (let i = 0; i < cardUnic.length; i++) {
                let valor = document.getElementById(`${i}`)
                valor.disabled = true
            }
            return true
        }

        id.innerHTML = "Tiempo: "+this.contador--
        setTimeout(this.conteoSegundos.bind(this), 1000)

    }
}

let temporizador2 = new Temporizador(timeMax,0);
temporizador2.conteoSegundos()

}




// con esta funcion obtendremos el vaor de la carta
function cartaSeleccionada(clicked_id) {
    if (gameActive == false) {
        return alert("Dale a start")
    }

    clics++
    document.getElementById("clicksTotales").innerHTML = "Clics: " + clics;
    // console.log(clicked_id)
     
    let valor = document.getElementById(`${clicked_id}`).value
    document.getElementById(`${clicked_id}`).innerHTML = valor
    compruebaPareja(valor, clicked_id)

}



// el position es para obtener el anterior click
position = 0

// creamos una funcion para comprobar las cartas para obtener los 2 clicks de usuario. Pasaremos los id (clicked_id y position) + el valor de la carta
function compruebaPareja(valorCartaActual, clicked_id) {

    if (cartasEmparejadas.length == 1) {

        cartasEmparejadas.push(valorCartaActual)

        let valor1 =  document.getElementById(`${position}`)
        let valor2 =  document.getElementById(`${clicked_id}`)

        // Comprobamos que las 2 cartas tengan el mismo valor y que no tengan el id repetido
        if (cartasEmparejadas[0] === cartasEmparejadas[1] && position !== clicked_id) {

            puntosConseguidos++;
            if (puntosConseguidos == maxPuntuacion) {
                alert("COMPLETADO")
            }
            console.log("Pareja Correcta")
            valor2.disabled = true, valor2.style = "background-color:green", valor2.innerHTML = valor2.value
            valor1.disabled = true, valor1.style = "background-color:green",  valor1.innerHTML = valor1.value
            document.getElementById("resultados").innerHTML = "Puntos: " + puntosConseguidos;
            cartasEmparejadas = []
            position = 0
        }
        else {
            cartasEmparejadas = [];
            setTimeout(function(){
                valor1.innerHTML = ""
                valor2.innerHTML = ""
            }, 500);

            position = 0
            console.log("Incorrecto")
        }
    }
    else {
        cartasEmparejadas.push(valorCartaActual)
        position = clicked_id
        console.log(cartasEmparejadas)
    }


}




