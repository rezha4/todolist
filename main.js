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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBLGlFQUFlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMEQ7QUFDWDtBQUNMOzs7QUFHMUM7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixhQUFhOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQWE7QUFDekIsWUFBWSw0REFBYztBQUMxQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBYztBQUMxQixZQUFZLDREQUFjO0FBQzFCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYzs7QUFFcEM7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RCxvQ0FBb0MsY0FBYzs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFVO0FBQ3RCLFlBQVksNERBQWM7QUFDMUI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7VUNqR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0Q7QUFDcEI7QUFDaUM7QUFDdEI7QUFDTDs7QUFFMUM7QUFDQSxxQkFBcUIsdURBQWU7QUFDcEM7QUFDQSxtREFBYztBQUNkLFlBQVksbURBQWM7O0FBRTFCLHNEQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlEQUFPOztBQUVsQyxRQUFRLDhEQUF5QjtBQUNqQyxRQUFRLDREQUFjO0FBQ3RCLFFBQVEsbURBQVUsQ0FBQyx5REFBb0I7QUFDdkMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFlO0FBQzFDO0FBQ0EsUUFBUSw0REFBYztBQUN0QixRQUFRLHNEQUFhO0FBQ3JCO0FBQ0EsS0FBSzs7QUFFTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2xlYXJSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZ2xvYmFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25ld1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXJyYXlPZlByb2plY3RzID0gKG5hbWUpID0+IHtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICByZXR1cm4ge25hbWUsIGFycmF5fTtcbn1cblxuY29uc3QgYXJyYXlPZlRvZG9zID0gKCkgPT4ge1xuICAgIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IHsgYXJyYXlPZlByb2plY3RzLCBhcnJheU9mVG9kb3MgfSIsImNvbnN0IHJlbW92ZUFsbENoaWxkID0gKHBhcmVudCkgPT4ge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuY29uc3QgZGVsZXRlVG9kbyA9IChhcnJheSwgdG9kb1RpdGxlKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gYXJyYXkuZmluZEluZGV4KG9iaiA9PiBvYmoudGl0bGUgPT0gdG9kb1RpdGxlKTtcblxuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG59XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAoYXJyYXksIHByb2plY3RUaXRsZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGFycmF5LmZpbmRJbmRleChvYmogPT4gb2JqLm5hbWUgPT0gcHJvamVjdFRpdGxlKTtcblxuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG59XG5cbmV4cG9ydCB7IHJlbW92ZUFsbENoaWxkLCBkZWxldGVUb2RvLCBkZWxldGVQcm9qZWN0IH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgY3VycmVudFByb2plY3Q6IFwiXCJcbn0iLCJjb25zdCBuZXdUb2RvID0gKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBub3RlLCBjaGVjaykgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBub3RlLCBjaGVjayB9XG59XG5cbmV4cG9ydCB7IG5ld1RvZG8gfSIsImltcG9ydCB7IGRlbGV0ZVRvZG8sIGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9jbGVhclJlbmRlclwiO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGQgfSBmcm9tIFwiLi9jbGVhclJlbmRlclwiO1xuaW1wb3J0IHsgY3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9nbG9iYWxcIjtcblxuXG5jb25zdCByZW5kZXJQcm9qZWN0ID0gKGFycmF5KSA9PiB7XG4gICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSBgJHtlbGVtZW50Lm5hbWV9YDtcblxuICAgICAgICBsZXQgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLmlkID0gXCJkZWxldGVcIjtcbiAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJEZWxcIjtcbiAgICAgICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KGFycmF5LCBlbGVtZW50Lm5hbWUpO1xuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0bGlzdFwiKSk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0KGFycmF5KTtcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXQvV2F0Y2hcIjtcbiAgICAgICAgZWRpdEJ0bi5pZCA9IFwiZWRpdFwiO1xuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nI3Byb2plY3QtZGlhbG9nXCIpLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3Byb2plY3QtdGl0bGVcIikudmFsdWUgPSBlbGVtZW50Lm5hbWU7XG5cbiAgICAgICAgICAgIC8vcmVtb3ZlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgICAgIC8vbWFrZSBuZXcgZWRpdCBidXR0b24gdGhhdCB1cGRhdGVzIHRoaXMgXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCNwcm9qZWN0bGlzdFwiKS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICByZW1vdmVBbGxDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9saXN0XCIpKTtcbiAgICAgICAgICAgIHJlbmRlclRvZG8oZWxlbWVudC5hcnJheSk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuY29uc3QgcmVuZGVyVG9kbyA9IChhcnJheSkgPT4ge1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG5cbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIHRpdGxlLmlkID0gYCR7ZWxlbWVudC50aXRsZX1gO1xuXG4gICAgICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgJHtlbGVtZW50LnRpdGxlfWApO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC50aXRsZX1gO1xuXG4gICAgICAgIGxldCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxCdG4uaWQgPSBcImRlbGV0ZVwiO1xuICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIkRlbFwiO1xuICAgICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG8oYXJyYXksIGVsZW1lbnQudGl0bGUpO1xuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvbGlzdFwiKSk7XG4gICAgICAgICAgICByZW5kZXJUb2RvKGFycmF5KTtcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXQvV2F0Y2hcIjtcbiAgICAgICAgZWRpdEJ0bi5pZCA9IFwiZWRpdFwiO1xuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nI3RvZG8tZGlhbG9nXCIpLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3RpdGxlXCIpLnZhbHVlID0gZWxlbWVudC50aXRsZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkZXNjXCIpLnZhbHVlID0gZWxlbWVudC5kZXNjO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2R1ZVwiKS52YWx1ZSA9IGVsZW1lbnQuZHVlO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3ByaW9yaXR5XCIpLnZhbHVlID0gZWxlbWVudC5wcmlvcml0eTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNub3RlXCIpLnZhbHVlID0gZWxlbWVudC5ub3RlO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vcmVtb3ZlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgICAgIC8vbWFrZSBuZXcgZWRpdCBidXR0b24gdGhhdCB1cGRhdGVzIHRoaXMgXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgIFxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb2xpc3RcIikuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBcbiAgICB9KTtcbn1cblxuY29uc3QgcmVuZGVyRWRpdFRvZG8gPSAoYXJyYXksIHRvZG9UaXRsZSkgPT4ge1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmICh0b2RvVGl0bGUgPT09IGVsZW1lbnQudGl0bGUpIHtcblxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IHsgcmVuZGVyVG9kbywgcmVuZGVyUHJvamVjdCwgcmVuZGVyRWRpdFRvZG8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYXJyYXlPZlByb2plY3RzLCBhcnJheU9mVG9kb3MgfSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IHsgbmV3VG9kbyB9IGZyb20gXCIuL25ld1RvZG9cIjtcbmltcG9ydCB7IHJlbmRlclRvZG8sIHJlbmRlclByb2plY3QsIHJlbmRlckVkaXRUb2RvIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZCB9IGZyb20gXCIuL2NsZWFyUmVuZGVyXCI7XG5pbXBvcnQgeyBjdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL2dsb2JhbFwiO1xuXG5sZXQgbWFzdGVyUHJvamVjdEFyciA9IFtdO1xubGV0IGRlZmF1bHRQcm9qZWN0ID0gYXJyYXlPZlByb2plY3RzKFwiRGVmYXVsdCBQcm9qZWN0XCIpO1xubWFzdGVyUHJvamVjdEFyci5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbmN1cnJlbnRQcm9qZWN0ID0gZGVmYXVsdFByb2plY3Q7XG5jb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG5cbnJlbmRlclByb2plY3QobWFzdGVyUHJvamVjdEFycik7XG5cbmNvbnN0IGJ1dHRvbkxpc3RlbmVyID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdG9kb1wiKTtcbiAgICBuZXdUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kaWFsb2dcIikuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaWFsb2dUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRpYWxvZyBidXR0b25cIik7XG4gICAgZGlhbG9nVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCN0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkZXNjXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZHVlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNub3RlXCIpLnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgbGV0IGlucHV0dGVkVG9kbyA9IG5ld1RvZG8odGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIG5vdGUpO1xuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFycmF5LnB1c2goaW5wdXR0ZWRUb2RvKTtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsI3RvZG9saXN0XCIpKTtcbiAgICAgICAgcmVuZGVyVG9kbyhjdXJyZW50UHJvamVjdC5hcnJheSk7XG4gICAgfSk7XG4gICAgLy90b2RvIGVkaXQvd2F0Y2hcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdFwiKTtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kaWFsb2dcIikuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaWFsb2dQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRpYWxvZyBidXR0b25cIik7XG4gICAgZGlhbG9nUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gYXJyYXlPZlByb2plY3RzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlKTtcbiAgICAgICAgbWFzdGVyUHJvamVjdEFyci5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICByZW1vdmVBbGxDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwjcHJvamVjdGxpc3RcIikpO1xuICAgICAgICByZW5kZXJQcm9qZWN0KG1hc3RlclByb2plY3RBcnIpO1xuICAgICAgICBjb25zb2xlLmxvZyhtYXN0ZXJQcm9qZWN0QXJyKTtcbiAgICB9KVxuXG59KSgpO1xuXG5leHBvcnQgeyBjdXJyZW50UHJvamVjdCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9