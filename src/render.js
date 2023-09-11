import { deleteTodo, deleteProject } from "./clearRender";
import { removeAllChild } from "./clearRender";
import { currentProject } from "./global";
import { masterProjectArr } from "./index";

const renderProject = (array) => {
    array.forEach(element => {
        const li = document.createElement("li");

        li.textContent = `${element.name}`;

        let delBtn = document.createElement("button");
        delBtn.id = "delete";
        delBtn.textContent = "Del";
        delBtn.addEventListener("click", () => {
            deleteProject(array, element.name);
            removeAllChild(document.querySelector("#projectlist"));
            renderProject(array);
        })

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit/Watch";
        editBtn.id = "edit";
        editBtn.addEventListener("click", () => {
            document.querySelector("dialog#project-dialog").showModal();
            document.querySelector("input#project-title").value = element.name;

            //remove submit button
            //make new edit button that updates this 
        })

        li.appendChild(delBtn);
        li.appendChild(editBtn);
        document.querySelector("ul#projectlist").appendChild(li);
        li.addEventListener("click", () => {
            console.log(element.name);
            let index = masterProjectArr.findIndex(obj => obj.name == element.name)
            console.log(index)
            currentProject = element;
            removeAllChild(document.querySelector("#todolist"));
            renderTodo(masterProjectArr[index].array);
        })
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

            
            //remove submit button
            //make new edit button that updates this 
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