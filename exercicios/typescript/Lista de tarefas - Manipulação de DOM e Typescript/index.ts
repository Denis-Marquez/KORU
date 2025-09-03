// index.ts

const buttonElm = document.getElementById('add-task');
if(buttonElm) {
    buttonElm.addEventListener('click', () => {
        const inputElm = document.getElementById('taks-title') as HTMLInputElement | null;
        if(inputElm) {
            addTask(inputElm.value);
            inputElm.value = '';
        }
    } );

}

function addTask(title: string) {
    const taskContainer = document.getElementById('task-container');
    if (taskContainer) {
        const taskDiv = document.createElement('div');
        taskDiv.style.display = 'flex';
        const taskId = new Date().getTime().toString();
        taskDiv.id = taskId;
        const taskTitle = document.createElement('p');
        taskTitle.textContent = title;

        const taskComplete = document.createElement('button');
        taskComplete.textContent = 'Completar';

        const taskRemove = document.createElement('button');
        taskRemove.addEventListener('click', (event) => {
            removeTask(taskId);
        });

        taskRemove.textContent = 'Remover';
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskComplete);
        taskDiv.appendChild(taskRemove);
        taskContainer.appendChild(taskDiv);
    }
}

function removeTask(id: string): void {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}

function completeTask(id: string) {
    // desafio!
    // lógica parecida com remove task
}

// lembre de compilar index.ts usando `tsc index.ts`