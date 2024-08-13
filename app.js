function logName(name, surname){
    console.log(`Мое имя ${name} ${surname}`);
}

logName('Годжо','Сатору');

function countDepositSum(depositinUSD, month, rate){
    const sum = depositinUSD * (1 + rate / 12) ** month;
    return sum
}

const example = countDepositSum(12000, 24, 0.07);
console.log(example)