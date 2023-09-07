import { newProjectObject } from "./newProject";
import { arrayOfProjects, arrayOfTodos } from "./array";
import { newTodo } from "./newTodo";
import { renderTodo } from "./render";
import { removeAllChild, deleteTodo } from "./clearRender";

const buttonListener = (() => {
    const newTodoBtn = document.querySelector("#new-todo");
    newTodoBtn.addEventListener("click", () => {
        document.querySelector("#todo-dialog").showModal();
    });

    const dialogTodoBtn = document.querySelector("#todo-dialog button");
    dialogTodoBtn.addEventListener("click", () => {
        const title = document.querySelector("input#title").value;
        const desc = document.querySelector("input#desc").value;
        const due = document.querySelector("input#due").value;
        const priority = document.querySelector("input#priority").value;
        const note = document.querySelector("input#note").value;
        
        let inputtedTodo = newTodo(title, desc, due, priority, note);

        arrayOfTodos.push(inputtedTodo);
        removeAllChild(document.querySelector("ul#todolist"));
        renderTodo(arrayOfTodos);
    })
    //todo delete

    //todo edit/watch

    const newProjectBtn = document.querySelector("#new-project");
    newProjectBtn.addEventListener("click", () => {
        document.querySelector("#project-dialog").showModal();
    });

    const dialogProjectBtn = document.querySelector("#project-dialog button");
    dialogProjectBtn.addEventListener("click", () => {
        const newProject = newProjectObject(document.querySelector("#project-dialog input").value);
        arrayOfProjects.push(newProject);
        console.log(arrayOfProjects);
    })

    // const newProjectBtn = document.querySelector("#project-dialog button");
    // newProjectBtn.addEventListener("click", () => {
    //     const newProjectInsert = newProject(document.querySelector("#project-dialog input").value);
    // })

})();