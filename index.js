function createTask() {
  const textBar = document.getElementById("textBar");
  const taskItems = document.getElementById("taskItems");
  const taskInput = textBar.value.trim();

  if (taskInput === "") {
    alert("You must write something!");
    return;
  }

  const newTask = document.createElement("li");
  newTask.textContent = taskInput;

  newTask.setAttribute("onclick", "toggleTask(this)");

  const deleteButton = document.createElement("span");
  deleteButton.classList.add("delete");
  deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deleteButton.setAttribute("onclick", "deleteTask(this)");

  newTask.appendChild(deleteButton);
  taskItems.appendChild(newTask);

  textBar.value = "";
}


function toggleTask(task) {
  task.classList.toggle("checked");
}


function deleteTask(deleteBtn) {
  const task = deleteBtn.parentElement;
  task.remove();
}