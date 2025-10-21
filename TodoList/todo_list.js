


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText });
        taskInput.value = "";
        displayTasks();
    }
}



function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        taskList.appendChild(li);
    });
}


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

displayTasks();
