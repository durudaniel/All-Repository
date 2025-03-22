const myName = "duru";
console.log(myName);
/*const list = document.querySelector(".to-do-list");
list.classList.add("hidden");
*/

const addButton = document.querySelector(".btn");
//let listItem, inputText, inputValue;
let countTask = 0;
const addNewElement = function () {
  let listItem = document.createElement("li");
  const inputValue = document.querySelector("#input-field").value;
  const inputText = document.createTextNode(inputValue);
  listItem.classList.add("list");
  listItem.appendChild(inputText);
  const toDo = document.querySelector(".to-do-list");

  /*ADD A CONDITION THAT ALERTS ERROR WHEN INPUT IS EMPTY ELSE APPEND LIST ITEM TO TO-DO ITEMS */

  /*A CONDITION THAT SETS AN INPUT ELEMENT EMPTY WHEN ADD BUTTON IS CLICKED */

  if (addButton) {
    if (inputValue === "") {
      alert("uncaught ERROR 🚫: to-do list not created");
    } else {
      toDo.appendChild(listItem);
      document.querySelector("#input-field").value = "";

      let counterElement = document.getElementById("counter");
      countTask++;
      counterElement.textContent = countTask;
      document.getElementById("counter").style.display = "block";

      // ADDING A CHECK BOX: that check each task element and strikes out the line
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.classList.add("my-checkbox");
      checkbox.style.display = "block";

      const checkTask = function () {
        console.log(this.checked);
        if (this.checked) {
          listItem.style.textDecoration = "line-through";
        } else {
          listItem.style.textDecoration = "none";
        }
      };

      checkbox.addEventListener("click", checkTask);

      listItem.appendChild(checkbox);
    }

    // a function that delete each task element from the todo
    const deleteTask = function (event) {
      const task = event.target.parentElement;
      toDo.removeChild(task);
      const counterElement = document.getElementById("counter");
      countTask--;
      if (countTask < 1) {
        counterElement.style.display = "none";
      }
      counterElement.textContent = countTask;
    };

    const deleteBtn = document.createElement("a");

    const text = document.createTextNode("\u00D7");
    deleteBtn.appendChild(text);
    deleteBtn.addEventListener("click", deleteTask);
    listItem.appendChild(deleteBtn);
    deleteBtn.classList.add("delete");
  }
};

addButton.addEventListener("click", addNewElement);

/*const dataType = function (types) {
  const toFilterData = types.filter((data) => {
    const dataGetter = typeof data;
    return dataGetter === "string";
  });
  return toFilterData;
};

console.log(dataType(["ah", "jsjj", 1, 2, 4, true]));
*/
const counter = ["msjsjs", "jsjsjk", "jsjsjs", "hssjsj"];
for (var i = 0; i < counter.length; i++) {
  console.log(`${i + 1} friend is ${counter[i]}`);
}
