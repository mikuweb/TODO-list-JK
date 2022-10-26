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

  // Create li, div, p ★未完了リスト作成
  const li = document.createElement("li");
  li.className = "todo-item-container";
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // Create: button完了/ Move item to 完了 area
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.className = "btn-complete";
  completeBtn.addEventListener("click", () => {
    //1.Delete item,
    deleteFromIncompleteArea(completeBtn.closest(".todo-item-container"));

    //2.Get text of TODO item
    const addTarget = completeBtn.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //3. Reset text
    addTarget.textContent = null;

    //4.Create li, p, button戻す
    const li = document.createElement("li");
    li.className = "todo-item-container";
    const p = document.createElement("p");
    p.innerText = text;
    const btnReturn = document.createElement("button");
    btnReturn.innerText = "戻す";
    btnReturn.className = "btn-return";
    // >Return item to 未完了 area
    btnReturn.addEventListener("click", () => {
      //1
      const deleteTarget = btnReturn.closest(".todo-item-container");
      document.querySelector(".complete-todos").removeChild(deleteTarget);
      //2
      const returnTarget = btnReturn.parentNode;
      const text = returnTarget.firstElementChild.innerText;
      console.log(text);
    });

    //5.Organize directory
    li.appendChild(addTarget);
    addTarget.appendChild(p);
    addTarget.appendChild(btnReturn);

    //6.Show in 未完了 area
    completeTodos.appendChild(li);
  });

  // Create: button削除/ Delete item
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.className = "btn-delete";
  deleteBtn.addEventListener("click", () => {
    // Delete item
    deleteFromIncompleteArea(deleteBtn.closest(".todo-item-container"));
  });

  // Organize directory
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  // Add to incomplete lists
  incompleteTodos.appendChild(li);

  ///// Function: Remove from 未完了 area
  const deleteFromIncompleteArea = (target) => {
    const deleteTarget = deleteBtn.closest(".todo-item-container");
    document.querySelector(".incomplete-todos").removeChild(target);
  };
};

///////////////////
// Event listener
inputBtn.addEventListener("click", addTodo);
