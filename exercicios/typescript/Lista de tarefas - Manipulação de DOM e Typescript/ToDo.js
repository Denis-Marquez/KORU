var tarefas = [];
function addTask(title) {
    var task = {
        id: new Date().getTime().toString(),
        title: title,
        status: 'pending',
    };
    tarefas.push(task);
    return task;
}
function removeTask(id) {
    tarefas.filter(function (task) {
        if (task.id === id) {
            return false;
        }
        return true;
    });
}
function completeTask(id) {
    tarefas = tarefas.map(function (task) {
        if (task.id === id) {
            task.status = "completed";
            return task;
        }
        return task;
    });
}
// Sugestão
// insiram no final algumas chamadas de addTask, complete task e remove e,
// a cada passo, mostre o valor da lista "tarefas" com console.log. Veja a mágica acontecendo!
