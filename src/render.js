import { deleteTodo } from "./clearRender";
import { removeAllChild } from "./clearRender";

const renderProject = (arr) => {
    arr.forEach(element => {
        const li = document.createElement("li");

        li.textContent = `${element.name}`;

        document.querySelector("ul#projectlist").appendChild(li);
    })
}

const renderTodo = (array) => {
    array.forEach(element => {
        const li = document.createElement("li");


        let title = document.createElement("input");
        title.setAttribute("type", "checkbox");
        title.id = `${element.title}`;

        let titleLabel = document.createElement("label");
        titleLabel.setAttribute("for", `${element.title}`);
        titleLabel.textContent = `${element.title}`;

        let delBtn = document.createElement("button");
        delBtn.id = "delete";
        delBtn.textContent = "Del";
        delBtn.addEventListener("click", () => {
            deleteTodo(array, element.title);
            removeAllChild(document.querySelector("#todolist"));
            renderTodo(array);
        })

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit/Watch";

        li.appendChild(title);
        li.appendChild(titleLabel);
        li.appendChild(delBtn);
        li.appendChild(editBtn);

        document.querySelector("#todolist").appendChild(li);
    });
}

export { renderTodo, renderProject }