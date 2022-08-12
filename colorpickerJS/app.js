const colorPicked = document.getElementById('exampleColorInput')
const labelColor = document.querySelector('.form-label')
const btnApply = document.getElementById('btnForView')
const panelColor = document.querySelector('#panelColor')



console.log(colorPicked.value)
console.log(btnApply.value)

btnApply.addEventListener('click', () => {
  console.log(colorPicked.value)  
  labelColor.innerHTML = colorPicked.value
  panelColor.style.backgroundColor = colorPicked.value
 
})

