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



const renderProject = (arr) => {
    arr.forEach(element => {
        const li = document.createElement("li");

        li.textContent = `${element.name}`;

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
let defaultProject = (0,_array__WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects)("Default Project");
masterProjectArr.push(defaultProject);

(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProject)(masterProjectArr)

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
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderTodo)(defaultProject.array);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0EsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjJDO0FBQ0k7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsYUFBYTs7QUFFekM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7O0FBRXBDO0FBQ0EsMENBQTBDLGNBQWM7QUFDeEQsb0NBQW9DLGNBQWM7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBVTtBQUN0QixZQUFZLDREQUFjO0FBQzFCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOd0Q7QUFDcEI7QUFDaUM7QUFDdEI7O0FBRS9DO0FBQ0EscUJBQXFCLHVEQUFlO0FBQ3BDOztBQUVBLHNEQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlEQUFPOztBQUVsQztBQUNBLFFBQVEsNERBQWM7QUFDdEIsUUFBUSxtREFBVTtBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSwyQkFBMkIsdURBQWU7QUFDMUM7QUFDQSxRQUFRLDREQUFjO0FBQ3RCLFFBQVEsc0RBQWE7QUFDckI7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2xlYXJSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmV3VG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcnJheU9mUHJvamVjdHMgPSAobmFtZSkgPT4ge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIHJldHVybiB7bmFtZSwgYXJyYXl9O1xufVxuXG5jb25zdCBhcnJheU9mVG9kb3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgeyBhcnJheU9mUHJvamVjdHMsIGFycmF5T2ZUb2RvcyB9IiwiY29uc3QgcmVtb3ZlQWxsQ2hpbGQgPSAocGFyZW50KSA9PiB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5jb25zdCBkZWxldGVUb2RvID0gKGFycmF5LCB0b2RvVGl0bGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBhcnJheS5maW5kSW5kZXgob2JqID0+IG9iai50aXRsZSA9PSB0b2RvVGl0bGUpO1xuXG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuZXhwb3J0IHsgcmVtb3ZlQWxsQ2hpbGQsIGRlbGV0ZVRvZG8gfSIsImNvbnN0IG5ld1RvZG8gPSAodGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIG5vdGUsIGNoZWNrKSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIG5vdGUsIGNoZWNrIH1cbn1cblxuZXhwb3J0IHsgbmV3VG9kbyB9IiwiaW1wb3J0IHsgZGVsZXRlVG9kbyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyXCI7XG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZCB9IGZyb20gXCIuL2NsZWFyUmVuZGVyXCI7XG5cbmNvbnN0IHJlbmRlclByb2plY3QgPSAoYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC5uYW1lfWA7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsI3Byb2plY3RsaXN0XCIpLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KVxufVxuXG5jb25zdCByZW5kZXJUb2RvID0gKGFycmF5KSA9PiB7XG4gICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cblxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgdGl0bGUuaWQgPSBgJHtlbGVtZW50LnRpdGxlfWA7XG5cbiAgICAgICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGAke2VsZW1lbnQudGl0bGV9YCk7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LnRpdGxlfWA7XG5cbiAgICAgICAgbGV0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbEJ0bi5pZCA9IFwiZGVsZXRlXCI7XG4gICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsXCI7XG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlVG9kbyhhcnJheSwgZWxlbWVudC50aXRsZSk7XG4gICAgICAgICAgICByZW1vdmVBbGxDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9saXN0XCIpKTtcbiAgICAgICAgICAgIHJlbmRlclRvZG8oYXJyYXkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdC9XYXRjaFwiO1xuICAgICAgICBlZGl0QnRuLmlkID0gXCJlZGl0XCI7XG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2cjdG9kby1kaWFsb2dcIikuc2hvd01vZGFsKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvbGlzdFwiKS5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHJlbmRlckVkaXRUb2RvID0gKGFycmF5LCB0b2RvVGl0bGUpID0+IHtcbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAodG9kb1RpdGxlID09PSBlbGVtZW50LnRpdGxlKSB7XG5cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IHJlbmRlclRvZG8sIHJlbmRlclByb2plY3QsIHJlbmRlckVkaXRUb2RvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFycmF5T2ZQcm9qZWN0cywgYXJyYXlPZlRvZG9zIH0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCB7IG5ld1RvZG8gfSBmcm9tIFwiLi9uZXdUb2RvXCI7XG5pbXBvcnQgeyByZW5kZXJUb2RvLCByZW5kZXJQcm9qZWN0LCByZW5kZXJFZGl0VG9kbyB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGQgfSBmcm9tIFwiLi9jbGVhclJlbmRlclwiO1xuXG5sZXQgbWFzdGVyUHJvamVjdEFyciA9IFtdO1xubGV0IGRlZmF1bHRQcm9qZWN0ID0gYXJyYXlPZlByb2plY3RzKFwiRGVmYXVsdCBQcm9qZWN0XCIpO1xubWFzdGVyUHJvamVjdEFyci5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcblxucmVuZGVyUHJvamVjdChtYXN0ZXJQcm9qZWN0QXJyKVxuXG5jb25zdCBidXR0b25MaXN0ZW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRvZG9cIik7XG4gICAgbmV3VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGlhbG9nXCIpLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGlhbG9nVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kaWFsb2cgYnV0dG9uXCIpO1xuICAgIGRpYWxvZ1RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZGVzY1wiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2R1ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjcHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjbm90ZVwiKS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIGxldCBpbnB1dHRlZFRvZG8gPSBuZXdUb2RvKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBub3RlKTtcblxuICAgICAgICBkZWZhdWx0UHJvamVjdC5hcnJheS5wdXNoKGlucHV0dGVkVG9kbyk7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCN0b2RvbGlzdFwiKSk7XG4gICAgICAgIHJlbmRlclRvZG8oZGVmYXVsdFByb2plY3QuYXJyYXkpO1xuICAgIH0pO1xuICAgIC8vdG9kbyBlZGl0L3dhdGNoXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3RcIik7XG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGlhbG9nXCIpLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGlhbG9nUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kaWFsb2cgYnV0dG9uXCIpO1xuICAgIGRpYWxvZ1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGFycmF5T2ZQcm9qZWN0cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjcHJvamVjdC10aXRsZVwiKS52YWx1ZSk7XG4gICAgICAgIG1hc3RlclByb2plY3RBcnIucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsI3Byb2plY3RsaXN0XCIpKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdChtYXN0ZXJQcm9qZWN0QXJyKTtcbiAgICAgICAgY29uc29sZS5sb2cobWFzdGVyUHJvamVjdEFycik7XG4gICAgfSlcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9