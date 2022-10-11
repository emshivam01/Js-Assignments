document.querySelector(".addButton").addEventListener("click", () => {
  let val = document.querySelector(".input").value;

  if (val === "") {
  } else {
    let container = document.querySelector(".container");
    let ul = document.createElement("ul");
    let list = document.createElement("li");
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.setAttribute("class", "editButton");

    let addBtn = document.createElement("button");
    addBtn.textContent = "Add";
    addBtn.setAttribute("class", "editButton");
    addBtn.setAttribute("class", "hide");
    // addBtn.style.backgroundColor = "Green";
    addBtn.style.float = "right";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("class", "deleteButton");
    deleteBtn.setAttribute("id", "del");

    ul.setAttribute("class", "item");
    list.setAttribute("class", "item_input");
    list.textContent = val;

    ul.appendChild(list);
    list.appendChild(deleteBtn);
    list.appendChild(addBtn);
    list.appendChild(editBtn);
    container.appendChild(ul);

    document.querySelector(".input").value = "";

    deleteBtn.addEventListener("click", () => {
      ul.remove();
    });

    editBtn.addEventListener("click", () => {
      list.contentEditable = true;
      editBtn.setAttribute("class", "hide");
      addBtn.classList.add("show", "editButton");
    });

    addBtn.addEventListener("click", () => {
      list.contentEditable = false;
      addBtn.setAttribute("class", "hide");
      editBtn.classList.add("show", "editButton");
    });
  }
});
