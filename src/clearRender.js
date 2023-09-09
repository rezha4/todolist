const removeAllChild = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const deleteTodo = (array, todoTitle) => {
    let index = array.findIndex(obj => obj.title == todoTitle);

    array.splice(index, 1);
}

const deleteProject = (array, projectTitle) => {
    let index = array.findIndex(obj => obj.name == projectTitle);

    array.splice(index, 1);
}

export { removeAllChild, deleteTodo, deleteProject }