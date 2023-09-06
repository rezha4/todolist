import { newProject } from "./newProject";

const defaultProject = newProject("Default Project");
console.log(defaultProject)

const buttonListener = (() => {
    const newTodoBtn = document.querySelector("#new-todo");
    newTodoBtn.addEventListener("click", () => {
    document.querySelector("#todo-dialog").showModal();
    });

    //todo delete
    //todo edit/watch

    const newProject = document.querySelector("#new-project");
    newProject.addEventListener("click", () => {
    document.querySelector("#project-dialog").showModal();
    });

})();