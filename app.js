const role = prompt();

switch (role){
    case 'manager':
        console.log('менеджер');
        break;
    case 'admin':
        console.log('admin');
        break;
    case 'ceo':
        console.log('CEO');
        break;
    default:
        console.log('мы тебя не знаем')
}