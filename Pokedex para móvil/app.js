const container = document.getElementById('contenedor')
const card = document.getElementById('card')
const generateNewPokBtn = document.querySelector('#newPokeBtn')
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const equipo = [];
let carta = ""
const cargarPeliculas = async() =>{

      
        let ran = random(1,802)       
            
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${ran}`)

 
    
            if (respuesta.status === 200) {
                const datos = await respuesta.json()
               
                console.log(datos)
                console.log(datos.sprites.front_default)
                container.innerHTML = `<h1 id="name">${datos.name}</h1>`
                carta = `<img class="poster" src=${datos.sprites.front_default}>`
                console.log(carta)
                card.innerHTML = carta
            }
    
        } 
       


cargarPeliculas() 

generateNewPokBtn.addEventListener('click', cargarPeliculas )
console.log(equipo)

