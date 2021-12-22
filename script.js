var addButton = document.getElementById("add-button");
var clearCompletedButton = document.getElementById("clear-completed-button");
var emptyButton = document.getElementById("empty-button");
var saveListButoon = document.getElementById("save-button");

addButton.addEventListener("click", addtoDoItem);
clearCompletedButton.addEventListener("click", clearCompletedToDoItems);
emptyButton.addEventListener("click", emptyList);
saveListButoon.addEventListener("click",saveList);

function addtoDoItem(){
    alert("Add todo item");
}

function clearCompletedToDoItems(){
    alert("Clear completed todo items");
}

function emptyList(){
    alert("Empty list");
}

function saveList(){
    alert("Save todo items");
}