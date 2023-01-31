// 3!
function factorial(num){
    let totalFac = 1;
    for(let i = num ; i >= 1; i--){
        totalFac = totalFac * i;
    }
    return totalFac
}
const number = factorial(5);
console.log(number);

// while loop
function myNum(num){
    let i = num;
    let result = 1;
    while(i >=1){
        result =result *i;
        i--;
    }
    return result
}
const numbers = myNum(10);
console.log(numbers)