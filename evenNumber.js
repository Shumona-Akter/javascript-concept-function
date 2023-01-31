function evenNumber(num){
    if (num % 2 == 0){
        return ("is even number")
    }
    return("is odd number")
}
const  myNum = evenNumber(390);
console.log(myNum);


function myEvenNumberFun(nunbers){
    if (nunbers % 2 === 0){
        return true
    }
    return false
}

const myEven = myEvenNumberFun(399857);
console.log(myEven)