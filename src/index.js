let tasks = [];

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const currentDate = new Date();
    const task = {
      text: taskText,
      completed: false,
      date: currentDate.toLocaleDateString()
    };
    tasks.push(task);
    taskInput.value = "";
    displayTasks();
  }
}

function markCompleted(index) {
  tasks[index].completed = true;
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    const dateSpan = document.createElement("span");
    dateSpan.textContent = task.date;
    dateSpan.classList.add("date");

    const taskText = document.createElement("span");
    taskText.textContent = ` - ${task.text}`;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Completada";
    completeButton.addEventListener("click", () => markCompleted(index));
    completeButton.classList.add("complete-button");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => deleteTask(index));
    deleteButton.classList.add("delete-button");

    if (task.completed) {
      taskText.classList.add("completed");
      completeButton.disabled = true;
    }

    listItem.appendChild(dateSpan);
    listItem.appendChild(taskText);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}

addButton.addEventListener("click", addTask);

displayTasks();
