let startDeposit = 12000;
const rate = 0.07
const oneYearDep = startDeposit * rate;
console.log(oneYearDep);

const oneMothDep = oneYearDep / 12;
console.log(oneMothDep);

const endDeposit = startDeposit * (1 + rate / 12) ** 24;
console.log(endDeposit)

const housePrice = 13900

if (endDeposit > housePrice){
    console.log('Вы можете купить квартиру,\nостаток после покупки будет ' + (endDeposit - housePrice));
}   else{
    console.log('Продай почку')
}