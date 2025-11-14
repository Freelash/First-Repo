const addBtn = document.querySelector(".addBtn");
const listInput = document.querySelector(".listInput");
const tasksList = document.querySelector(".todoList");

addBtn.addEventListener("click", addTask);

let listitems = [];

function deleteItem(event) {
  const buttonClicked = event.target;
  const li = buttonClicked.closest("li");
  if (li) li.remove();
}

function addTask() {
  let inpValue = listInput.value.trim();

  if (inpValue !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = inpValue;
    showItem(listItem);
    listInput.value = "";
  } else {
    alert("Task required");
  }
}
function showItem(listItem) {
  const taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.textContent = "Delete";
  taskDeleteBtn.classList.add("deleteBtn");
  taskDeleteBtn.addEventListener("click", deleteItem);

  listItem.appendChild(taskDeleteBtn);
  tasksList.appendChild(listItem);

  listitems.push(listItem);
}
