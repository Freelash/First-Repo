const addBtn = document.querySelector(".addBtn");
const listInput = document.querySelector(".listInput");
const tasksList = document.querySelector(".todoList");
// const deleteBtn = document.querySelector(".deleteBtn");

/* deleteBtn.addEventListener('click', () =>; {

}); */

addBtn.addEventListener("click", addTask);

let listitems = [];

function deleteItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closet("li").remove();
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
  listitems.push(listItem);

  for (let i = 0; i < listitems.length; i++) {
    tasksList.appendChild(listitems[i]);

    const taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.textContent = "Delete";
    taskDeleteBtn.classList.add("deleteBtn");

    taskDeleteBtn.addEventListener("click", deleteItem);

    tasksList.appendChild(taskDeleteBtn);

    tasksList.appendChild(tasksList);
  }
  listInput.value = "";
}

//   // ...existing code...
// const addBtn = document.querySelector(".addBtn");
// const listInput = document.querySelector(".listInput");
// const tasksList = document.querySelector(".todoList");
// // ...existing code...

// addBtn.addEventListener("click", addTask);

// let listitems = [];

// function deleteItem(event) {
//   const buttonClicked = event.target;
//   const li = buttonClicked.closest("li");
//   if (li) li.remove();
// }

// function addTask() {
//   let inpValue = listInput.value.trim();

//   if (inpValue !== "") {
//     const listItem = document.createElement("li");
//     listItem.textContent = inpValue;
//     showItem(listItem);
//     listInput.value = "";
//   } else {
//     alert("Task required");
//   }
// }

// function showItem(listItem) {
//   // append delete button into the li and then append the li once
//   const taskDeleteBtn = document.createElement("button");
//   taskDeleteBtn.textContent = "Delete";
//   taskDeleteBtn.classList.add("deleteBtn");
//   taskDeleteBtn.addEventListener("click", deleteItem);

//   listItem.appendChild(taskDeleteBtn);
//   tasksList.appendChild(listItem);

//   listitems.push(listItem);
//   // no looping over listitems and no appending tasksList to itself
// }
// // ...existing code...
