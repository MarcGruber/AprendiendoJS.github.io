const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');

const buttonNumber = document.querySelectorAll('.numero');
const buttonsOperador = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

buttonNumber.forEach(boton => {
    
    boton.addEventListener('click', (event) => {
        display.agregarNumero(boton.innerHTML)

    });

}
)

buttonsOperador.forEach(boton => {
    boton.addEventListener('click', (event) => {
        display.computar(boton.value)
    })
})