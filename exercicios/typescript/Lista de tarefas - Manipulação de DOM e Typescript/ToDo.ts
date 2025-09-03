interface Task {
    id: string;
    title: string;
    status: 'completed' | 'pending';
}

let tarefas: Task[] = []

function addTask(title: string): Task {
    const task: Task =  {
        id: new Date().getTime().toString(),
        title: title,
        status: 'pending',
    };
    tarefas.push(task);
    return task;
}

function removeTask(id: string): void {
    tarefas.filter((task) => {
        if (task.id === id) {
            return false;
        }
        return true;
    });
}

function completeTask(id: string) {
    tarefas = tarefas.map((task) => {
        if (task.id === id) {
            task.status = "completed";
            return task;
        }
        return task;
    })
}

// Sugestão
// insiram no final algumas chamadas de addTask, complete task e remove e,
// a cada passo, mostre o valor da lista "tarefas" com console.log. Veja a mágica acontecendo!