const todoList = document.querySelector(".todo-list");
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");

resetInput();

// event delegation
todoList.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    const btn = e.target;
    btn.parentElement.remove();
  }
});

addBtn.addEventListener("click", () => {
  addTask(taskInput.value);
});

taskInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addTask(taskInput.value);
  }
});

function addTask(taskContent = "") {
  taskContent = taskContent.trim();

  if (taskContent !== "") {
    createTaskElement(taskContent);
    resetInput();
  }
}

function createTaskElement(task) {
  const taskElement = `<li class="todo-item">
        <span class="item">${task}</span>
        <button class="closeBtn">X</button>
      </li>`;

  todoList.insertAdjacentHTML("afterbegin", taskElement);
}

function resetInput() {
  taskInput.value = "";
  taskInput.focus();
}
