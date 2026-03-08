const addBtn = document.getElementById("addTaskBtn");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/* load tasks when page opens */

tasks.forEach(task => createTask(task));

addBtn.addEventListener("click", addTask);

function addTask(){

const taskText = input.value.trim();

if(taskText === "") return;

tasks.push(taskText);

localStorage.setItem("tasks", JSON.stringify(tasks));

createTask(taskText);

input.value = "";
}

function createTask(taskText){

const li = document.createElement("li");

const span = document.createElement("span");
span.textContent = taskText;
span.classList.add("task-text");

const deleteBtn = document.createElement("span");
deleteBtn.textContent = "X";
deleteBtn.classList.add("delete");

/* mark completed */

span.addEventListener("click", function(){
span.classList.toggle("completed");
});

/* delete task */

deleteBtn.addEventListener("click", function(){

tasks = tasks.filter(t => t !== taskText);

localStorage.setItem("tasks", JSON.stringify(tasks));

li.remove();
});

li.appendChild(span);
li.appendChild(deleteBtn);

taskList.appendChild(li);
}