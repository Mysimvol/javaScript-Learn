const userData = ['Антон', 18, 'Саратов',];

function getData(){
    return ['Антон', 18, 'Саратов',];
}
const [userName, _, city] = getData();

console.log(userName, city);