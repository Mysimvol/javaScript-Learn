const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'кристина';

// Добавить в конец массива данные
users.push('Максим');
console.log(users);
// Добавить в начало данные
users.unshift('Петя');
console.log(users);
// Удалить Последний элемент из массива
users.pop();
console.log(users);
// Удалить первый элемент из массива
users.shift();
console.log(users);