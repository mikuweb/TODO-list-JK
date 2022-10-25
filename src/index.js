import "./styles.css";
///////////////////
// Get element
const inputBtn = document.querySelector(".btn-input");
const incompleteTodos = document.querySelector(".incomplete-todos");
///////////////////
// Function
const addTodo = function (e) {
  const inputText = document.querySelector(".text-input").value;
  console.log(inputText);
  document.querySelector(".text-input").value = "";

  // Create li, div, p
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // Create: button完了
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.className = "btn-complete";
  completeBtn.addEventListener("click", () => {
    alert("はい");
  });

  // Create: button削除
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.className = "btn-delete";
  deleteBtn.addEventListener("click", () => {
    alert("はい");
  });

  // Organize directory
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  // Add to incomplete lists
  incompleteTodos.appendChild(li);
  console.log(li);

  console.log(completeBtn, deleteBtn);
};

///////////////////
// Event listener
inputBtn.addEventListener("click", addTodo);
