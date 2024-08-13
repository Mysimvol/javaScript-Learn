const hourPrice = 80;// часовая ставка 
const myTimeday = 5; // сколько часов в день
const myWeekjob = 5;// сколько дней в неделю
let dayToweekend = 11 - 2; // дней до отпуска
let zakazhour = 40; //на сколько чаосв заказ

let zakazOnday = zakazhour / myTimeday; // сколько займет дней заказ
console.log(zakazOnday + ' дней на заказ');

// Смогу ли работать
console.log(dayToweekend > zakazOnday);

// сколько денег за работу
let priceZajob = hourPrice * zakazhour;
console.log(priceZajob + ' заработок за заказ');