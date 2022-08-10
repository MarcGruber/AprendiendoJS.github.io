const insertNewTask = document.getElementById("insertTask");
const searchTask = document.getElementById("searchTask").value;
const displayTask = document.getElementById("displayTask");
let listaDeTareas = [];
console.log(searchTask);

const buttonInsert = document.getElementById("buttonInsert");

function clickButton () {
    listaDeTareas.push(insertNewTask.value)
    return displayTask.innerHTML += '<br>'+insertNewTask.value;
    
}

buttonInsert.addEventListener("click", clickButton);