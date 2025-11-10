const addBtn = document.querySelector(".addBtn");
const listInput = document.querySelector(".listInput");
const tasksList = document.querySelector(".todoList");
const deleteBtn = document.querySelector(".deleteBtn");

/* deleteBtn.addEventListener('click', () =>; {

});

addBtn.addEventListener('click', addTask{
    
}; */

let listitems = [];

function showItem(listItem) {
  listitems.push(listItem);
}
for (let i = 0; i < listitems.length; i++) {
  tasksList.appendChild(listitems[i]);
}

function addTask() {
  const inpValue = addInput.value.trim();

  if (impValue !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = inpValue;
  } else {
    alert("Task required");
  }
}
