const roles = ['admin', 'user', 'manager', 'superuser'];
console.log(roles);
// массив начнется со второго номера элемента 
const slice1 = roles.slice(2);
console.log(slice1);
// Массив начнется со второго элемента и закончится до 3
const slice2 = roles.slice(2, 3);
console.log(slice2);
// этот метод берет последний элемент в массиве в качестве начала
const slice3 = roles.slice(-1);
console.log(slice3);
// Разделяет массив и модифицирует.
// const slice4 = roles.splice(2);
// console.log(slice4);
// console.log(roles)

// Обратный порядок массива и модифицирует массив
const rel = roles.reverse();
console.log(rel);

const newRoles = ['sisadmin', 'developer'];
const rel1 = roles.concat(newRoles);
console.log(rel1);