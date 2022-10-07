
const carrito = document.querySelector('#carrito')
const template = document.querySelector('#template')
const fragment = document.createDocumentFragment()
const clic = document.querySelectorAll('.card .btn')
const btnAgregar = document.querySelector('#agregar')
const btnquitar = document.querySelector('#quitar')
//clic.addEventListener('click', btnClicked)
console.log(btnAgregar)
const carritoObjeto = [];

const agregarAlCarrito  = (e) => {
    let frutas = e.target.dataset.fruta


    const producto = {
        titulo :  e.target.dataset.fruta,
        id :  e.target.dataset.fruta,
        cantidad : 1
    }
    
    const indice = carritoObjeto.findIndex(
        (item) => item.id === producto.id
        )

    if (indice === -1) {
        carritoObjeto.push(producto)
    } else {
        carritoObjeto[indice].cantidad++
    }
        console.log(carritoObjeto)
    console.log(indice)
    pintarCarrito(carritoObjeto)
}

const pintarCarrito = (array) => {

    carrito.textContent = ""

    array.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad
        clone.querySelector('#agregar')
        fragment.appendChild(clone)  

        carrito.appendChild(fragment)
    })
}  

clic.forEach((btn) => btn.addEventListener('click', agregarAlCarrito))    




