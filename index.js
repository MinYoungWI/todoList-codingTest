const plusBtn = document.querySelector(".plus-btn"); //할일 추가 버튼
const inputText = document.querySelector(".input-text"); //할일을 입력한 칸
const todoListWrap = document.querySelector(".data-wrap"); //작성한 투두를 추가할 div
const listNum = document.getElementsByClassName("todo-item");
const listNumCount = listNum.length;

let uniqueClassName = 0;
function makeUniqueClassName() {
  const currentClassName = `todo-item${uniqueClassName}`;
  uniqueClassName += 1;
  return currentClassName;
}

plusBtn.addEventListener("click", () => {
  const list = document.createElement("div");
  list.classList.add("todo-item", makeUniqueClassName());

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      list.style.textDecoration = "line-through";
    } else {
      list.style.textDecoration = "none";
    }
  });

  const todosText = document.createElement("div");
  todosText.innerText = inputText.value;
  todosText.classList.add("to-dos");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", (e) => {
    const removeList = e.target.closest(".todo-item");
    removeList.remove();
  });

  list.appendChild(checkbox);
  list.appendChild(todosText);
  list.appendChild(deleteBtn);
  todoListWrap.appendChild(list);

  inputText.value = "";
});
