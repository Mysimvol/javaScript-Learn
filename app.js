const tasks = ['Задача1','Задача2','Задача3','Задача4'];

for(let i = 0; i < tasks.length; i++){
    if(tasks[i] === 'Задача2'){
        continue;
    }
    console.log(tasks[i]);
}