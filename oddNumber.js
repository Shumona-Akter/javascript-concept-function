function oddNumber(number){
    if (number % 2 !== 0){
        console.log("odd num")
    }
    else{
        console.log("even number")
    }
}
const myNumber = oddNumber(398);

function myOddNumber(num){
    if(num % 2 !== 0){
        return true;
    }
    else{
        return false;
    }
};
const myNum = myOddNumber(20);
// console.log(myNum);

function OddNumber(num1){
    if (num1 % 2 ==  0){
        return false;
    }
    // else function a na dileo chole tai direct return korleo hoi
    return true;
}

const myoddNum = OddNumber(40); 
// console.log(myoddNum);

function odd(num2){
    if(num2 % 2 !== 0){
        return true
    }
    return false
}

const myNum2 = odd(39);
console.log(myNum2);

function oddMyNumber(number){
    const reminder = number % 2;
    if (reminder !== 0){
        return true
    }
    return false
}
const OddMyNum = oddMyNumber(10)
console.log(OddMyNum);

function oddNum(num){
    const reminder = num% 2;
    if ( reminder !== 0){
        return true
    }
    return false
}

const khushisNumber = oddNum(200928457);
console.log(khushisNumber)