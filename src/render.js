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
        editBtn.id = "edit";
        editBtn.addEventListener("click", () => {
            document.querySelector("dialog#todo-dialog").showModal();
            document.querySelector("input#title").value = element.title;
            document.querySelector("input#desc").value = element.desc;
            document.querySelector("input#due").value = element.due;
            document.querySelector("input#priority").value = element.priority;
            document.querySelector("input#note").value = element.note;

            document.querySelector("button#submit-todo").textContent = "Edit"
        })

        li.appendChild(title);
        li.appendChild(titleLabel);
        li.appendChild(delBtn);
        li.appendChild(editBtn);

        document.querySelector("#todolist").appendChild(li);
    });
}

const renderEditTodo = (array, todoTitle) => {
    array.forEach(element => {
        if (todoTitle === element.title) {

        }
    })
}

export { renderTodo, renderProject, renderEditTodo }