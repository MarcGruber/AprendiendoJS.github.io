const insertNewTask = document.getElementById("insertTask");
const searchTask = document.getElementById("searchTask").value;
const displayTask = document.getElementById("displayTask");
let listaDeTareas = [];
console.log(searchTask);

const buttonInsert = document.getElementById("buttonInsert");

function clickButton () {
    listaDeTareas.push(insertNewTask.value)
    document.cookie = listaDeTareas;
    return displayTask.innerHTML += '<br>'+ "<b>-"+insertNewTask.value+"</b>";
}
arrayTareas = document.cookie;
console.log(arrayTareas[1])
if (document.cookie != null) {
    

    for (let i = 0; i < arrayTareas.length; i++) {
        const element = arrayTareas[i];
        if (arrayTareas[i] == ",") {
            displayTask.innerHTML += '<br>'
        }
        displayTask.innerHTML += "<b>"+arrayTareas[i]+"</b>";
    }

}

buttonInsert.addEventListener("click", clickButton);