/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array.js":
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayOfProjects: () => (/* binding */ arrayOfProjects),
/* harmony export */   arrayOfTodos: () => (/* binding */ arrayOfTodos)
/* harmony export */ });
const arrayOfProjects = (name) => {
    let array = [];
    return {name, array};
}

const arrayOfTodos = () => {
    return [];
}



/***/ }),

/***/ "./src/clearRender.js":
/*!****************************!*\
  !*** ./src/clearRender.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   removeAllChild: () => (/* binding */ removeAllChild)
/* harmony export */ });
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



/***/ }),

/***/ "./src/newTodo.js":
/*!************************!*\
  !*** ./src/newTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newTodo: () => (/* binding */ newTodo)
/* harmony export */ });
const newTodo = (title, desc, due, priority, note, check) => {
    return { title, desc, due, priority, note, check }
}



/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderEditTodo: () => (/* binding */ renderEditTodo),
/* harmony export */   renderProject: () => (/* binding */ renderProject),
/* harmony export */   renderTodo: () => (/* binding */ renderTodo)
/* harmony export */ });
/* harmony import */ var _clearRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearRender */ "./src/clearRender.js");



const renderProject = (array) => {
    array.forEach(element => {
        const li = document.createElement("li");

        li.textContent = `${element.name}`;

        let delBtn = document.createElement("button");
        delBtn.id = "delete";
        delBtn.textContent = "Del";
        delBtn.addEventListener("click", () => {
            (0,_clearRender__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(array, element.name);
            (0,_clearRender__WEBPACK_IMPORTED_MODULE_0__.removeAllChild)(document.querySelector("#projectlist"));
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
            (0,_clearRender__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(array, element.title);
            (0,_clearRender__WEBPACK_IMPORTED_MODULE_0__.removeAllChild)(document.querySelector("#todolist"));
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./src/array.js");
/* harmony import */ var _newTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTodo */ "./src/newTodo.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _clearRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearRender */ "./src/clearRender.js");





let masterProjectArr = [];
let currentProject;
let defaultProject = (0,_array__WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects)("Default Project");
masterProjectArr.push(defaultProject);
currentProject = defaultProject;
console.log(currentProject)

;(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProject)(masterProjectArr)

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
        
        let inputtedTodo = (0,_newTodo__WEBPACK_IMPORTED_MODULE_1__.newTodo)(title, desc, due, priority, note);

        defaultProject.array.push(inputtedTodo);
        (0,_clearRender__WEBPACK_IMPORTED_MODULE_3__.removeAllChild)(document.querySelector("ul#todolist"));
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderTodo)(masterProjectArr[0].array);
    });
    //todo edit/watch
    const newProjectBtn = document.querySelector("#new-project");
    newProjectBtn.addEventListener("click", () => {
        document.querySelector("#project-dialog").showModal();
    });

    const dialogProjectBtn = document.querySelector("#project-dialog button");
    dialogProjectBtn.addEventListener("click", () => {
        const newProject = (0,_array__WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects)(document.querySelector("input#project-title").value);
        masterProjectArr.push(newProject);
        (0,_clearRender__WEBPACK_IMPORTED_MODULE_3__.removeAllChild)(document.querySelector("ul#projectlist"));
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProject)(masterProjectArr);
        console.log(masterProjectArr);
    })

    
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0EsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjBEO0FBQ1g7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsYUFBYTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFhO0FBQ3pCLFlBQVksNERBQWM7QUFDMUI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7O0FBRXBDO0FBQ0EsMENBQTBDLGNBQWM7QUFDeEQsb0NBQW9DLGNBQWM7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBVTtBQUN0QixZQUFZLDREQUFjO0FBQzFCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7VUN4RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ053RDtBQUNwQjtBQUNpQztBQUN0Qjs7QUFFL0M7QUFDQTtBQUNBLHFCQUFxQix1REFBZTtBQUNwQztBQUNBO0FBQ0E7O0FBRUEsdURBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaURBQU87O0FBRWxDO0FBQ0EsUUFBUSw0REFBYztBQUN0QixRQUFRLG1EQUFVO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDJCQUEyQix1REFBZTtBQUMxQztBQUNBLFFBQVEsNERBQWM7QUFDdEIsUUFBUSxzREFBYTtBQUNyQjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jbGVhclJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9uZXdUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFycmF5T2ZQcm9qZWN0cyA9IChuYW1lKSA9PiB7XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgcmV0dXJuIHtuYW1lLCBhcnJheX07XG59XG5cbmNvbnN0IGFycmF5T2ZUb2RvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gW107XG59XG5cbmV4cG9ydCB7IGFycmF5T2ZQcm9qZWN0cywgYXJyYXlPZlRvZG9zIH0iLCJjb25zdCByZW1vdmVBbGxDaGlsZCA9IChwYXJlbnQpID0+IHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmNvbnN0IGRlbGV0ZVRvZG8gPSAoYXJyYXksIHRvZG9UaXRsZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGFycmF5LmZpbmRJbmRleChvYmogPT4gb2JqLnRpdGxlID09IHRvZG9UaXRsZSk7XG5cbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKGFycmF5LCBwcm9qZWN0VGl0bGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBhcnJheS5maW5kSW5kZXgob2JqID0+IG9iai5uYW1lID09IHByb2plY3RUaXRsZSk7XG5cbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5leHBvcnQgeyByZW1vdmVBbGxDaGlsZCwgZGVsZXRlVG9kbywgZGVsZXRlUHJvamVjdCB9IiwiY29uc3QgbmV3VG9kbyA9ICh0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSwgbm90ZSwgY2hlY2spID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSwgbm90ZSwgY2hlY2sgfVxufVxuXG5leHBvcnQgeyBuZXdUb2RvIH0iLCJpbXBvcnQgeyBkZWxldGVUb2RvLCBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJcIjtcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJcIjtcblxuY29uc3QgcmVuZGVyUHJvamVjdCA9IChhcnJheSkgPT4ge1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC5uYW1lfWA7XG5cbiAgICAgICAgbGV0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbEJ0bi5pZCA9IFwiZGVsZXRlXCI7XG4gICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsXCI7XG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdChhcnJheSwgZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdGxpc3RcIikpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdChhcnJheSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0L1dhdGNoXCI7XG4gICAgICAgIGVkaXRCdG4uaWQgPSBcImVkaXRcIjtcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZyNwcm9qZWN0LWRpYWxvZ1wiKS5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gZWxlbWVudC5uYW1lO1xuXG4gICAgICAgICAgICAvL3JlbW92ZSBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgICAvL21ha2UgbmV3IGVkaXQgYnV0dG9uIHRoYXQgdXBkYXRlcyB0aGlzIFxuICAgICAgICB9KVxuXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwjcHJvamVjdGxpc3RcIikuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pXG59XG5cbmNvbnN0IHJlbmRlclRvZG8gPSAoYXJyYXkpID0+IHtcbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICB0aXRsZS5pZCA9IGAke2VsZW1lbnQudGl0bGV9YDtcblxuICAgICAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYCR7ZWxlbWVudC50aXRsZX1gKTtcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQudGl0bGV9YDtcblxuICAgICAgICBsZXQgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLmlkID0gXCJkZWxldGVcIjtcbiAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJEZWxcIjtcbiAgICAgICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUb2RvKGFycmF5LCBlbGVtZW50LnRpdGxlKTtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb2xpc3RcIikpO1xuICAgICAgICAgICAgcmVuZGVyVG9kbyhhcnJheSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0L1dhdGNoXCI7XG4gICAgICAgIGVkaXRCdG4uaWQgPSBcImVkaXRcIjtcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZyN0b2RvLWRpYWxvZ1wiKS5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCN0aXRsZVwiKS52YWx1ZSA9IGVsZW1lbnQudGl0bGU7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZGVzY1wiKS52YWx1ZSA9IGVsZW1lbnQuZGVzYztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkdWVcIikudmFsdWUgPSBlbGVtZW50LmR1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcmlvcml0eVwiKS52YWx1ZSA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjbm90ZVwiKS52YWx1ZSA9IGVsZW1lbnQubm90ZTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL3JlbW92ZSBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgICAvL21ha2UgbmV3IGVkaXQgYnV0dG9uIHRoYXQgdXBkYXRlcyB0aGlzIFxuICAgICAgICB9KVxuXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb2xpc3RcIikuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xufVxuXG5jb25zdCByZW5kZXJFZGl0VG9kbyA9IChhcnJheSwgdG9kb1RpdGxlKSA9PiB7XG4gICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKHRvZG9UaXRsZSA9PT0gZWxlbWVudC50aXRsZSkge1xuXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgeyByZW5kZXJUb2RvLCByZW5kZXJQcm9qZWN0LCByZW5kZXJFZGl0VG9kbyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhcnJheU9mUHJvamVjdHMsIGFycmF5T2ZUb2RvcyB9IGZyb20gXCIuL2FycmF5XCI7XG5pbXBvcnQgeyBuZXdUb2RvIH0gZnJvbSBcIi4vbmV3VG9kb1wiO1xuaW1wb3J0IHsgcmVuZGVyVG9kbywgcmVuZGVyUHJvamVjdCwgcmVuZGVyRWRpdFRvZG8gfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJcIjtcblxubGV0IG1hc3RlclByb2plY3RBcnIgPSBbXTtcbmxldCBjdXJyZW50UHJvamVjdDtcbmxldCBkZWZhdWx0UHJvamVjdCA9IGFycmF5T2ZQcm9qZWN0cyhcIkRlZmF1bHQgUHJvamVjdFwiKTtcbm1hc3RlclByb2plY3RBcnIucHVzaChkZWZhdWx0UHJvamVjdCk7XG5jdXJyZW50UHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xuY29uc29sZS5sb2coY3VycmVudFByb2plY3QpXG5cbnJlbmRlclByb2plY3QobWFzdGVyUHJvamVjdEFycilcblxuY29uc3QgYnV0dG9uTGlzdGVuZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10b2RvXCIpO1xuICAgIG5ld1RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRpYWxvZ1wiKS5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpYWxvZ1RvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGlhbG9nIGJ1dHRvblwiKTtcbiAgICBkaWFsb2dUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3RpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2Rlc2NcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkdWVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3ByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I25vdGVcIikudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBsZXQgaW5wdXR0ZWRUb2RvID0gbmV3VG9kbyh0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSwgbm90ZSk7XG5cbiAgICAgICAgZGVmYXVsdFByb2plY3QuYXJyYXkucHVzaChpbnB1dHRlZFRvZG8pO1xuICAgICAgICByZW1vdmVBbGxDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwjdG9kb2xpc3RcIikpO1xuICAgICAgICByZW5kZXJUb2RvKG1hc3RlclByb2plY3RBcnJbMF0uYXJyYXkpO1xuICAgIH0pO1xuICAgIC8vdG9kbyBlZGl0L3dhdGNoXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3RcIik7XG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGlhbG9nXCIpLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGlhbG9nUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kaWFsb2cgYnV0dG9uXCIpO1xuICAgIGRpYWxvZ1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGFycmF5T2ZQcm9qZWN0cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjcHJvamVjdC10aXRsZVwiKS52YWx1ZSk7XG4gICAgICAgIG1hc3RlclByb2plY3RBcnIucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsI3Byb2plY3RsaXN0XCIpKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdChtYXN0ZXJQcm9qZWN0QXJyKTtcbiAgICAgICAgY29uc29sZS5sb2cobWFzdGVyUHJvamVjdEFycik7XG4gICAgfSlcblxuICAgIFxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=