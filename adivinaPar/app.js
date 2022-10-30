
let gameActive = false;
let cartasEmparejadas = [];
let puntosConseguidos = 0;
var cardUnic = document.getElementsByClassName('cardE');
let element;

let cartas = [0, 0, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]



function startGame() {
    gameActive = true;
    document.getElementById("resultados").innerHTML = puntosConseguidos;

    let cartasMezcladas = cartas.sort((a, b) => 0.5 - Math.random())



    for (let i = 0; i < cardUnic.length; i++) {
        document.getElementById(`${i}`).innerHTML = cartasMezcladas[i]

    }

}


function compruebaPareja(valorCartaActual) {
    if (gameActive == false) {
        return alert("Dale a start")
    }
    if (cartasEmparejadas.length == 1) {
        cartasEmparejadas.push(valorCartaActual)
        if (cartasEmparejadas[0] === cartasEmparejadas[1]) {
            puntosConseguidos++;
            console.log("Pareja Correcta")
            document.getElementById("resultados").innerHTML = puntosConseguidos;
            cartasEmparejadas = []
        }
        else {
            cartasEmparejadas = [];
            console.log("Incorrecto")
        }
    } else {
        cartasEmparejadas.push(valorCartaActual)
        console.log(cartasEmparejadas)
    }


}





function cartaSeleccionada(clicked_id) {
    // console.log(clicked_id)
    let valor = document.getElementById(`${clicked_id}`).outerText
    compruebaPareja(valor)


}
