import { newProjectObject } from "./newProject";
import { arrayOfProjects, arrayOfTodos } from "./array";
import { newTodo } from "./newTodo";
import { renderTodo, renderProject } from "./render";
import { removeAllChild, deleteTodo } from "./clearRender";

let masterProjectArr = [];
let defaultProject = arrayOfProjects("Default Project");
let defaultTodoArray = arrayOfTodos();
defaultProject.array.push(defaultTodoArray);
masterProjectArr.push(defaultProject);

renderProject(masterProjectArr)

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

        defaultTodoArray.push(inputtedTodo);
        removeAllChild(document.querySelector("ul#todolist"));
        renderTodo(defaultProject.array[0]);
    });
    //todo edit/watch

    const newProjectBtn = document.querySelector("#new-project");
    newProjectBtn.addEventListener("click", () => {
        document.querySelector("#project-dialog").showModal();
    });

    const dialogProjectBtn = document.querySelector("#project-dialog button");
    dialogProjectBtn.addEventListener("click", () => {
        const newProject = arrayOfProjects(document.querySelector("input#project-title").value);
        masterProjectArr.push(newProject);
        removeAllChild(document.querySelector("ul#projectlist"));
        renderProject(masterProjectArr);
        console.log(newProject);
    })

    // const newProjectBtn = document.querySelector("#project-dialog button");
    // newProjectBtn.addEventListener("click", () => {
    //     const newProjectInsert = newProject(document.querySelector("#project-dialog input").value);
    // })

})();