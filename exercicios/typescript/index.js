// index.ts
var buttonElm = document.getElementById('add-task');
if (buttonElm) {
    buttonElm.addEventListener('click', function () {
        var inputElm = document.getElementById('taks-title');
        if (inputElm) {
            addTask(inputElm.value);
            inputElm.value = '';
        }
    });
}
function addTask(title) {
    var taskContainer = document.getElementById('task-container');
    if (taskContainer) {
        var taskDiv = document.createElement('div');
        taskDiv.style.display = 'flex';
        var taskId_1 = new Date().getTime().toString();
        taskDiv.id = taskId_1;
        var taskTitle = document.createElement('p');
        taskTitle.textContent = title;
        var taskComplete = document.createElement('button');
        taskComplete.textContent = 'Completar';
        var taskRemove = document.createElement('button');
        taskRemove.addEventListener('click', function (event) {
            removeTask(taskId_1);
        });
        taskRemove.textContent = 'Remover';
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskComplete);
        taskDiv.appendChild(taskRemove);
        taskContainer.appendChild(taskDiv);
    }
}
function removeTask(id) {
    var element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}
function completeTask(id) {
    // desafio!
    // lógica parecida com remove task
}
// lembre de compilar index.ts usando `tsc index.ts`
