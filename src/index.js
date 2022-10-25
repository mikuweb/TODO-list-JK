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

  // Organize directory
  li.appendChild(div);
  div.appendChild(p);

  // Add to incomplete lists

  incompleteTodos.appendChild(li);
  console.log(li);
};

///////////////////
// Event listener
inputBtn.addEventListener("click", addTodo);
