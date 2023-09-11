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

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    currentProject: ""
});

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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/global.js");





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
        li.addEventListener("click", () => {
            _global__WEBPACK_IMPORTED_MODULE_1__.currentProject = element;
            (0,_clearRender__WEBPACK_IMPORTED_MODULE_0__.removeAllChild)(document.querySelector("#todolist"));
            renderTodo(element.array);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentProject: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_4__.currentProject)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./src/array.js");
/* harmony import */ var _newTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTodo */ "./src/newTodo.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _clearRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearRender */ "./src/clearRender.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global */ "./src/global.js");






let masterProjectArr = [];
let defaultProject = (0,_array__WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects)("Default Project");
masterProjectArr.push(defaultProject);
_global__WEBPACK_IMPORTED_MODULE_4__.currentProject = defaultProject;
console.log(_global__WEBPACK_IMPORTED_MODULE_4__.currentProject);

(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProject)(masterProjectArr);

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

        

        _global__WEBPACK_IMPORTED_MODULE_4__.currentProject.array.push(inputtedTodo);
        (0,_clearRender__WEBPACK_IMPORTED_MODULE_3__.removeAllChild)(document.querySelector("ul#todolist"));
        localStorage.setItem("todoArray", JSON.stringify(_global__WEBPACK_IMPORTED_MODULE_4__.currentProject));
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderTodo)(JSON.parse(localStorage.getItem("todoArray")).array);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBLGlFQUFlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMEQ7QUFDWDtBQUNMOzs7QUFHMUM7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixhQUFhOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQWE7QUFDekIsWUFBWSw0REFBYztBQUMxQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBYztBQUMxQixZQUFZLDREQUFjO0FBQzFCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYzs7QUFFcEM7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RCxvQ0FBb0MsY0FBYzs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFVO0FBQ3RCLFlBQVksNERBQWM7QUFDMUI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7VUNqR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0Q7QUFDcEI7QUFDaUM7QUFDdEI7QUFDTDs7QUFFMUM7QUFDQSxxQkFBcUIsdURBQWU7QUFDcEM7QUFDQSxtREFBYztBQUNkLFlBQVksbURBQWM7O0FBRTFCLHNEQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlEQUFPOztBQUVsQzs7QUFFQSxRQUFRLDhEQUF5QjtBQUNqQyxRQUFRLDREQUFjO0FBQ3RCLHlEQUF5RCxtREFBYztBQUN2RSxRQUFRLG1EQUFVO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDJCQUEyQix1REFBZTtBQUMxQztBQUNBLFFBQVEsNERBQWM7QUFDdEIsUUFBUSxzREFBYTtBQUNyQjtBQUNBLEtBQUs7O0FBRUwsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FycmF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NsZWFyUmVuZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9uZXdUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFycmF5T2ZQcm9qZWN0cyA9IChuYW1lKSA9PiB7XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgcmV0dXJuIHtuYW1lLCBhcnJheX07XG59XG5cbmNvbnN0IGFycmF5T2ZUb2RvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gW107XG59XG5cbmV4cG9ydCB7IGFycmF5T2ZQcm9qZWN0cywgYXJyYXlPZlRvZG9zIH0iLCJjb25zdCByZW1vdmVBbGxDaGlsZCA9IChwYXJlbnQpID0+IHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmNvbnN0IGRlbGV0ZVRvZG8gPSAoYXJyYXksIHRvZG9UaXRsZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGFycmF5LmZpbmRJbmRleChvYmogPT4gb2JqLnRpdGxlID09IHRvZG9UaXRsZSk7XG5cbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKGFycmF5LCBwcm9qZWN0VGl0bGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBhcnJheS5maW5kSW5kZXgob2JqID0+IG9iai5uYW1lID09IHByb2plY3RUaXRsZSk7XG5cbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5leHBvcnQgeyByZW1vdmVBbGxDaGlsZCwgZGVsZXRlVG9kbywgZGVsZXRlUHJvamVjdCB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGN1cnJlbnRQcm9qZWN0OiBcIlwiXG59IiwiY29uc3QgbmV3VG9kbyA9ICh0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSwgbm90ZSwgY2hlY2spID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSwgbm90ZSwgY2hlY2sgfVxufVxuXG5leHBvcnQgeyBuZXdUb2RvIH0iLCJpbXBvcnQgeyBkZWxldGVUb2RvLCBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJcIjtcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJcIjtcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vZ2xvYmFsXCI7XG5cblxuY29uc3QgcmVuZGVyUHJvamVjdCA9IChhcnJheSkgPT4ge1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC5uYW1lfWA7XG5cbiAgICAgICAgbGV0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbEJ0bi5pZCA9IFwiZGVsZXRlXCI7XG4gICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsXCI7XG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdChhcnJheSwgZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdGxpc3RcIikpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdChhcnJheSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0L1dhdGNoXCI7XG4gICAgICAgIGVkaXRCdG4uaWQgPSBcImVkaXRcIjtcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZyNwcm9qZWN0LWRpYWxvZ1wiKS5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gZWxlbWVudC5uYW1lO1xuXG4gICAgICAgICAgICAvL3JlbW92ZSBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgICAvL21ha2UgbmV3IGVkaXQgYnV0dG9uIHRoYXQgdXBkYXRlcyB0aGlzIFxuICAgICAgICB9KVxuXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwjcHJvamVjdGxpc3RcIikuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBlbGVtZW50O1xuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvbGlzdFwiKSk7XG4gICAgICAgICAgICByZW5kZXJUb2RvKGVsZW1lbnQuYXJyYXkpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmNvbnN0IHJlbmRlclRvZG8gPSAoYXJyYXkpID0+IHtcbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICB0aXRsZS5pZCA9IGAke2VsZW1lbnQudGl0bGV9YDtcblxuICAgICAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYCR7ZWxlbWVudC50aXRsZX1gKTtcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQudGl0bGV9YDtcblxuICAgICAgICBsZXQgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLmlkID0gXCJkZWxldGVcIjtcbiAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJEZWxcIjtcbiAgICAgICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUb2RvKGFycmF5LCBlbGVtZW50LnRpdGxlKTtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb2xpc3RcIikpO1xuICAgICAgICAgICAgcmVuZGVyVG9kbyhhcnJheSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0L1dhdGNoXCI7XG4gICAgICAgIGVkaXRCdG4uaWQgPSBcImVkaXRcIjtcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZyN0b2RvLWRpYWxvZ1wiKS5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCN0aXRsZVwiKS52YWx1ZSA9IGVsZW1lbnQudGl0bGU7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZGVzY1wiKS52YWx1ZSA9IGVsZW1lbnQuZGVzYztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkdWVcIikudmFsdWUgPSBlbGVtZW50LmR1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcmlvcml0eVwiKS52YWx1ZSA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjbm90ZVwiKS52YWx1ZSA9IGVsZW1lbnQubm90ZTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL3JlbW92ZSBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgICAvL21ha2UgbmV3IGVkaXQgYnV0dG9uIHRoYXQgdXBkYXRlcyB0aGlzIFxuICAgICAgICB9KVxuXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICBcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9saXN0XCIpLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgXG4gICAgfSk7XG59XG5cbmNvbnN0IHJlbmRlckVkaXRUb2RvID0gKGFycmF5LCB0b2RvVGl0bGUpID0+IHtcbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAodG9kb1RpdGxlID09PSBlbGVtZW50LnRpdGxlKSB7XG5cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IHJlbmRlclRvZG8sIHJlbmRlclByb2plY3QsIHJlbmRlckVkaXRUb2RvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFycmF5T2ZQcm9qZWN0cywgYXJyYXlPZlRvZG9zIH0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCB7IG5ld1RvZG8gfSBmcm9tIFwiLi9uZXdUb2RvXCI7XG5pbXBvcnQgeyByZW5kZXJUb2RvLCByZW5kZXJQcm9qZWN0LCByZW5kZXJFZGl0VG9kbyB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGQgfSBmcm9tIFwiLi9jbGVhclJlbmRlclwiO1xuaW1wb3J0IHsgY3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9nbG9iYWxcIjtcblxubGV0IG1hc3RlclByb2plY3RBcnIgPSBbXTtcbmxldCBkZWZhdWx0UHJvamVjdCA9IGFycmF5T2ZQcm9qZWN0cyhcIkRlZmF1bHQgUHJvamVjdFwiKTtcbm1hc3RlclByb2plY3RBcnIucHVzaChkZWZhdWx0UHJvamVjdCk7XG5jdXJyZW50UHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xuY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuXG5yZW5kZXJQcm9qZWN0KG1hc3RlclByb2plY3RBcnIpO1xuXG5jb25zdCBidXR0b25MaXN0ZW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRvZG9cIik7XG4gICAgbmV3VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGlhbG9nXCIpLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGlhbG9nVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kaWFsb2cgYnV0dG9uXCIpO1xuICAgIGRpYWxvZ1RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZGVzY1wiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2R1ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjcHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjbm90ZVwiKS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIGxldCBpbnB1dHRlZFRvZG8gPSBuZXdUb2RvKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBub3RlKTtcblxuICAgICAgICBcblxuICAgICAgICBjdXJyZW50UHJvamVjdC5hcnJheS5wdXNoKGlucHV0dGVkVG9kbyk7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCN0b2RvbGlzdFwiKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0FycmF5XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0KSk7XG4gICAgICAgIHJlbmRlclRvZG8oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9BcnJheVwiKSkuYXJyYXkpO1xuICAgIH0pO1xuICAgIC8vdG9kbyBlZGl0L3dhdGNoXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3RcIik7XG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGlhbG9nXCIpLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGlhbG9nUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kaWFsb2cgYnV0dG9uXCIpO1xuICAgIGRpYWxvZ1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGFycmF5T2ZQcm9qZWN0cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjcHJvamVjdC10aXRsZVwiKS52YWx1ZSk7XG4gICAgICAgIG1hc3RlclByb2plY3RBcnIucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsI3Byb2plY3RsaXN0XCIpKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdChtYXN0ZXJQcm9qZWN0QXJyKTtcbiAgICAgICAgY29uc29sZS5sb2cobWFzdGVyUHJvamVjdEFycik7XG4gICAgfSlcblxufSkoKTtcblxuZXhwb3J0IHsgY3VycmVudFByb2plY3QgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==