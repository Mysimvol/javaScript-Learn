const balance = 1001;
const bonusBalance = 101;

const statusBanned = false;
const isExist = false;
const isSelling = true;

if((balance > 1000 || bonusBalance > 100) && !statusBanned && !isExist && isSelling){
    console.log('Можешь купить игру');
}   else{
    console.log('Ты не можешь купить игру')
}