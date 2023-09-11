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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentProject: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_4__.currentProject),
/* harmony export */   masterProjectArr: () => (/* binding */ masterProjectArr)
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
console.log(masterProjectArr);

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
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderTodo)(_global__WEBPACK_IMPORTED_MODULE_4__.currentProject.array);
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");





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
            console.log(element.name);
            let index = _index__WEBPACK_IMPORTED_MODULE_2__.masterProjectArr.findIndex(obj => obj.name == element.name)
            console.log(index)
            _global__WEBPACK_IMPORTED_MODULE_1__.currentProject = element;
            (0,_clearRender__WEBPACK_IMPORTED_MODULE_0__.removeAllChild)(document.querySelector("#todolist"));
            renderTodo(_index__WEBPACK_IMPORTED_MODULE_2__.masterProjectArr[index].array);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBLGlFQUFlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGd0Q7QUFDcEI7QUFDaUM7QUFDdEI7QUFDTDs7QUFFMUM7QUFDQSxxQkFBcUIsdURBQWU7QUFDcEM7QUFDQSxtREFBYztBQUNkOztBQUVBLHNEQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlEQUFPOztBQUVsQyxRQUFRLDhEQUF5QjtBQUNqQyxRQUFRLDREQUFjO0FBQ3RCLHlEQUF5RCxtREFBYztBQUN2RSxRQUFRLG1EQUFVLENBQUMseURBQW9CO0FBQ3ZDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDJCQUEyQix1REFBZTtBQUMxQztBQUNBLFFBQVEsNERBQWM7QUFDdEIsUUFBUSxzREFBYTtBQUNyQjtBQUNBLEtBQUs7O0FBRUwsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xERDtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjBEO0FBQ1g7QUFDTDtBQUNDOztBQUUzQztBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLGFBQWE7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBYTtBQUN6QixZQUFZLDREQUFjO0FBQzFCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBZ0I7QUFDeEM7QUFDQSxZQUFZLG1EQUFjO0FBQzFCLFlBQVksNERBQWM7QUFDMUIsdUJBQXVCLG9EQUFnQjtBQUN2QyxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHNCQUFzQixjQUFjOztBQUVwQztBQUNBLDBDQUEwQyxjQUFjO0FBQ3hELG9DQUFvQyxjQUFjOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQVU7QUFDdEIsWUFBWSw0REFBYztBQUMxQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztVQ3BHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FycmF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NsZWFyUmVuZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9uZXdUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcnJheU9mUHJvamVjdHMgPSAobmFtZSkgPT4ge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIHJldHVybiB7bmFtZSwgYXJyYXl9O1xufVxuXG5jb25zdCBhcnJheU9mVG9kb3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgeyBhcnJheU9mUHJvamVjdHMsIGFycmF5T2ZUb2RvcyB9IiwiY29uc3QgcmVtb3ZlQWxsQ2hpbGQgPSAocGFyZW50KSA9PiB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5jb25zdCBkZWxldGVUb2RvID0gKGFycmF5LCB0b2RvVGl0bGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBhcnJheS5maW5kSW5kZXgob2JqID0+IG9iai50aXRsZSA9PSB0b2RvVGl0bGUpO1xuXG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChhcnJheSwgcHJvamVjdFRpdGxlKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gYXJyYXkuZmluZEluZGV4KG9iaiA9PiBvYmoubmFtZSA9PSBwcm9qZWN0VGl0bGUpO1xuXG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuZXhwb3J0IHsgcmVtb3ZlQWxsQ2hpbGQsIGRlbGV0ZVRvZG8sIGRlbGV0ZVByb2plY3QgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBjdXJyZW50UHJvamVjdDogXCJcIlxufSIsImltcG9ydCB7IGFycmF5T2ZQcm9qZWN0cywgYXJyYXlPZlRvZG9zIH0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCB7IG5ld1RvZG8gfSBmcm9tIFwiLi9uZXdUb2RvXCI7XG5pbXBvcnQgeyByZW5kZXJUb2RvLCByZW5kZXJQcm9qZWN0LCByZW5kZXJFZGl0VG9kbyB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGQgfSBmcm9tIFwiLi9jbGVhclJlbmRlclwiO1xuaW1wb3J0IHsgY3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9nbG9iYWxcIjtcblxubGV0IG1hc3RlclByb2plY3RBcnIgPSBbXTtcbmxldCBkZWZhdWx0UHJvamVjdCA9IGFycmF5T2ZQcm9qZWN0cyhcIkRlZmF1bHQgUHJvamVjdFwiKTtcbm1hc3RlclByb2plY3RBcnIucHVzaChkZWZhdWx0UHJvamVjdCk7XG5jdXJyZW50UHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xuY29uc29sZS5sb2cobWFzdGVyUHJvamVjdEFycik7XG5cbnJlbmRlclByb2plY3QobWFzdGVyUHJvamVjdEFycik7XG5cbmNvbnN0IGJ1dHRvbkxpc3RlbmVyID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdG9kb1wiKTtcbiAgICBuZXdUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kaWFsb2dcIikuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaWFsb2dUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRpYWxvZyBidXR0b25cIik7XG4gICAgZGlhbG9nVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCN0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkZXNjXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZHVlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNub3RlXCIpLnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgbGV0IGlucHV0dGVkVG9kbyA9IG5ld1RvZG8odGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIG5vdGUpO1xuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFycmF5LnB1c2goaW5wdXR0ZWRUb2RvKTtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsI3RvZG9saXN0XCIpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3QpKTtcbiAgICAgICAgcmVuZGVyVG9kbyhjdXJyZW50UHJvamVjdC5hcnJheSk7XG4gICAgfSk7XG4gICAgLy90b2RvIGVkaXQvd2F0Y2hcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdFwiKTtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kaWFsb2dcIikuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaWFsb2dQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRpYWxvZyBidXR0b25cIik7XG4gICAgZGlhbG9nUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gYXJyYXlPZlByb2plY3RzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlKTtcbiAgICAgICAgbWFzdGVyUHJvamVjdEFyci5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICByZW1vdmVBbGxDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwjcHJvamVjdGxpc3RcIikpO1xuICAgICAgICByZW5kZXJQcm9qZWN0KG1hc3RlclByb2plY3RBcnIpO1xuICAgICAgICBjb25zb2xlLmxvZyhtYXN0ZXJQcm9qZWN0QXJyKTtcbiAgICB9KVxuXG59KSgpO1xuXG5leHBvcnQgeyBjdXJyZW50UHJvamVjdCwgbWFzdGVyUHJvamVjdEFyciB9IiwiY29uc3QgbmV3VG9kbyA9ICh0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSwgbm90ZSwgY2hlY2spID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSwgbm90ZSwgY2hlY2sgfVxufVxuXG5leHBvcnQgeyBuZXdUb2RvIH0iLCJpbXBvcnQgeyBkZWxldGVUb2RvLCBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJcIjtcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJcIjtcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vZ2xvYmFsXCI7XG5pbXBvcnQgeyBtYXN0ZXJQcm9qZWN0QXJyIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuY29uc3QgcmVuZGVyUHJvamVjdCA9IChhcnJheSkgPT4ge1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC5uYW1lfWA7XG5cbiAgICAgICAgbGV0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbEJ0bi5pZCA9IFwiZGVsZXRlXCI7XG4gICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsXCI7XG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdChhcnJheSwgZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdGxpc3RcIikpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdChhcnJheSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0L1dhdGNoXCI7XG4gICAgICAgIGVkaXRCdG4uaWQgPSBcImVkaXRcIjtcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZyNwcm9qZWN0LWRpYWxvZ1wiKS5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gZWxlbWVudC5uYW1lO1xuXG4gICAgICAgICAgICAvL3JlbW92ZSBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgICAvL21ha2UgbmV3IGVkaXQgYnV0dG9uIHRoYXQgdXBkYXRlcyB0aGlzIFxuICAgICAgICB9KVxuXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwjcHJvamVjdGxpc3RcIikuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IG1hc3RlclByb2plY3RBcnIuZmluZEluZGV4KG9iaiA9PiBvYmoubmFtZSA9PSBlbGVtZW50Lm5hbWUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb2xpc3RcIikpO1xuICAgICAgICAgICAgcmVuZGVyVG9kbyhtYXN0ZXJQcm9qZWN0QXJyW2luZGV4XS5hcnJheSk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuY29uc3QgcmVuZGVyVG9kbyA9IChhcnJheSkgPT4ge1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG5cbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIHRpdGxlLmlkID0gYCR7ZWxlbWVudC50aXRsZX1gO1xuXG4gICAgICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgJHtlbGVtZW50LnRpdGxlfWApO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC50aXRsZX1gO1xuXG4gICAgICAgIGxldCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxCdG4uaWQgPSBcImRlbGV0ZVwiO1xuICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIkRlbFwiO1xuICAgICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG8oYXJyYXksIGVsZW1lbnQudGl0bGUpO1xuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvbGlzdFwiKSk7XG4gICAgICAgICAgICByZW5kZXJUb2RvKGFycmF5KTtcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXQvV2F0Y2hcIjtcbiAgICAgICAgZWRpdEJ0bi5pZCA9IFwiZWRpdFwiO1xuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nI3RvZG8tZGlhbG9nXCIpLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3RpdGxlXCIpLnZhbHVlID0gZWxlbWVudC50aXRsZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkZXNjXCIpLnZhbHVlID0gZWxlbWVudC5kZXNjO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2R1ZVwiKS52YWx1ZSA9IGVsZW1lbnQuZHVlO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3ByaW9yaXR5XCIpLnZhbHVlID0gZWxlbWVudC5wcmlvcml0eTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNub3RlXCIpLnZhbHVlID0gZWxlbWVudC5ub3RlO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vcmVtb3ZlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgICAgIC8vbWFrZSBuZXcgZWRpdCBidXR0b24gdGhhdCB1cGRhdGVzIHRoaXMgXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgIFxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb2xpc3RcIikuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBcbiAgICB9KTtcbn1cblxuY29uc3QgcmVuZGVyRWRpdFRvZG8gPSAoYXJyYXksIHRvZG9UaXRsZSkgPT4ge1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmICh0b2RvVGl0bGUgPT09IGVsZW1lbnQudGl0bGUpIHtcblxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IHsgcmVuZGVyVG9kbywgcmVuZGVyUHJvamVjdCwgcmVuZGVyRWRpdFRvZG8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=