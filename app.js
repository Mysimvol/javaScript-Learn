const roles = ['admin', 'user', 'manager'];
console.log(roles);
// Перебор массива по строчному имени
console.log(roles.indexOf('user'));
console.log(roles.indexOf('superuser'));

if (roles.indexOf('user') >= 0){
    console.log('доступ есть');
}
// Делаем запрос есть ли элемент с этим именем
console.log(roles.includes('admin'));