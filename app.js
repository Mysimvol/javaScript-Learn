const url = 'https://purpleschool.ru/course/javascript'
const res = url.split('//')
console.log(res)

function massivUrl(arg){
    const url = arg;
    const result = url.split('/');
    const [http, _, name, ...others] = result;
    console.log(http, name, '/' + others.join('/'));
    console.log(`Протокол: ${http}`);
    console.log(`Доменное имя: ${name}`)
    console.log(`Библиотека /${others.join('/')}`)
}
massivUrl('https://purpleschool.ru/course/javascript')
