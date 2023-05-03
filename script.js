const inputForm = document.querySelector(".input-container");
const taskArea = document.querySelector(".task-container");
const inputBar = document.querySelector(".input-area");
const addBtn = document.querySelector(".add-btn");

// localStorage.clear();
var taskArr = localStorage.getItem("task-items") ? JSON.parse(localStorage.getItem("task-items")) : []

inputForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(inputBar.value !== ""){
        taskArr.push(inputBar.value);
        localStorage.setItem("task-items", JSON.stringify(taskArr));
        addItem(taskArr);
        inputForm.reset();
    }
})

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", ()=>{
    taskArea.innerHTML = "";
    taskArr = [];
    localStorage.setItem("task-items", JSON.stringify(taskArr));
})


function addItem(taskArr){

    taskArea.innerHTML = "";

    for(let i=0; i<taskArr.length; i++){

    var task = document.createElement("div");
    task.className = "task";

    var taskLeft = document.createElement("input");
    taskLeft.className = "text";
    taskLeft.readOnly = true;
    
    var taskRight = document.createElement("div");
    taskRight.className = "icons";

    var deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";

    taskLeft.value = taskArr[i];

    taskRight.appendChild(deleteIcon);
    task.appendChild(taskLeft);
    task.appendChild(taskRight);

    taskArea.appendChild(task);


    deleteIcon.addEventListener("click", ()=>{
        const taskArea = document.querySelector(".task-container");
        taskArea.innerHTML="";
        taskArr.splice(i,1);
        localStorage.setItem("task-items", JSON.stringify(taskArr));
        addItem(taskArr);
        console.log(taskArr);
    })

    }
}