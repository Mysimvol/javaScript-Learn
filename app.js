const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;


let sum = 0;
function getBalance(arrayOfOperations, initialBalance){
    let balance = initialBalance;
    for(const element of arrayOfOperations){
        balance +=element;
    }
    return balance;
}
console.log(getBalance(operations, startBalance));

function checkOperations(arrayOfOperations, initialBalance,){
    let balance = initialBalance;
    let isOk = true
    for(const element of arrayOfOperations){
        balance += element;
        if (balance < 0){
            isOk = false;
            break;
        }
    }
    return isOk;
}

console.log(checkOperations(operations, startBalance));


function avarageOperation(arrayOfOperations){
    let positivCount = 0;
    let positivSumm = 0;
    let negativCount = 0;
    let negativSumm = 0;
    for(const element of arrayOfOperations){
        if(element > 0){
            positivCount++;
            positivSumm += element;
        }
        if (element < 0){
        negativCount++;
        negativSumm +=element;
        }
    }   
    return [positivSumm / positivCount, negativSumm / negativCount]
}

console.log(avarageOperation(operations));