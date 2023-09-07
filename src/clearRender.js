import { arrayOfTodos } from "./array";

const removeAllChild = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const deleteTodo = (todoTitle) => {
    let index = arrayOfTodos.findIndex(obj => obj.title == todoTitle);

    arrayOfTodos.splice(index, 1);
}

export { removeAllChild, deleteTodo }