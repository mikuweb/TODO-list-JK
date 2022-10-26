import "./styles.css";
///////////////////
// Get element
const inputBtn = document.querySelector(".btn-input");
const incompleteTodos = document.querySelector(".incomplete-todos");
const completeTodos = document.querySelector(".complete-todos");

///////////////////
// Function
const addTodo = function (e) {
  const inputText = document.querySelector(".text-input").value;
  document.querySelector(".text-input").value = "";
  addIncompleteTodo(inputText);
};

function addIncompleteTodo(text) {
  const [li, div, p] = createTodoNode(text);
  // Create: button完了/ Move item to 完了 area
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.className = "btn-complete";
  completeBtn.addEventListener("click", (e) => {
    const todo = e.target.parentNode.parentNode;
    removeIncompleteTodo(todo);
    addCompleteTodo(text);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.className = "btn-delete";
  deleteBtn.addEventListener("click", (e) => {
    const todo = e.target.parentNode.parentNode;
    removeIncompleteTodo(todo);
  });

  // Add all elements to their parents
  div.appendChild(p);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
  li.appendChild(div);
  incompleteTodos.appendChild(li);
}

function addCompleteTodo(text) {
  const [li, div, p] = createTodoNode(text);
  // Create: button完了/ Move item to 完了 area
  const returnBtn = document.createElement("button");
  returnBtn.innerText = "戻す";
  returnBtn.className = "btn-return";
  returnBtn.addEventListener("click", (e) => {
    const todo = e.target.parentNode.parentNode;
    removeCompletedTodo(todo);
    addIncompleteTodo(text);
  });

  // Add all elements to their parents
  div.appendChild(p);
  div.appendChild(returnBtn);
  li.appendChild(div);
  completeTodos.appendChild(li);
}

function createTodoNode(text) {
  // Create li, div, p ★未完了リスト作成
  const li = document.createElement("li");
  li.className = "todo-item-container";
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = text;
  return [li, div, p];
}

function removeIncompleteTodo(todoNode) {
  incompleteTodos.removeChild(todoNode); //ul.removeChild(li)
}

function removeCompletedTodo(todoNode) {
  completeTodos.removeChild(todoNode);
}

///////////////////
// Event listener
inputBtn.addEventListener("click", addTodo);
