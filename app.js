function powerOfTwo(num){
    return num * num;
}

console.log(powerOfTwo(5));

// Это анонимная функция
const poft = function(num){
    return num *num;
}
console.log(poft(6))

// Стрелочная функция
const sofr = num => num * num;
console.log(sofr(4))