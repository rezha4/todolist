import { newProjectObject } from "./newProject";
import { arrayOfProjects } from "./array";

const buttonListener = (() => {
    const newTodoBtn = document.querySelector("#new-todo");
    newTodoBtn.addEventListener("click", () => {
        document.querySelector("#todo-dialog").showModal();
    });

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