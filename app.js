const tasks = ['Задача1', 'Задача2', 'Задача3', 'Задача4'];

function addTask(arg){
    return tasks.push(arg);
}

addTask('piska')
console.log(tasks)

deleteTask('Задача1')
function deleteTask(task){
    const rel = tasks.indexOf(task);
    // return console.log(rel);
    if (rel >= 0 ){
        tasks.splice(rel, 1);
        console.log(tasks);
    } else{
        console.log('Такой задачи нет')
    }
}

beginTask('Задача4')
function beginTask(task){
    const rel = tasks.indexOf(task);
    if(rel >= 0 ){
        const oldTask = tasks[rel];
        tasks.splice(rel,1);
        tasks.unshift(oldTask);
        console.log(tasks)
    }   else{
        console.log('Не правильная задача')
    }
    return
}