const myPrimaryArray = [20, 30, 12, 83, 35, 77, 53, 84, 32, 65, 45];

let sum = 0
for (let i = 0; i < myPrimaryArray.length;  i++){
    const index = [i];
    const element = myPrimaryArray[index] ;
    sum = sum + element
}
// console.log(sum);

function myArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i ++){
        const index = [i];
        const element = array[index];
        sum = sum + element;
    }
    return sum;

}
const myArraySum = myArray([39, 84,23, 43, 54, 23, 97, 45, 12, 51, 63, 20, 54, 80])
console.log(myArraySum);

// picnic total taka

function picnicFee(money){
    let takaUthanorBox = 0;
    for(let i = 0; i < money.length; i ++){
        const takarSerialNumber = [i];
        const jonProtiTaka = money[takarSerialNumber];
        takaUthanorBox = takaUthanorBox + jonProtiTaka;
    }
    return takaUthanorBox
}

const totalTaka = picnicFee([100, 250, 300, 400, 230, 60, 100, 500, 300, 280, 300, 500, 40]);
console.log(totalTaka);


function shopping(items){
    let totalCost = 0;
    for (let i = 0; i < items.length; i ++){
        const item = [i];
        const itemPrice = items[item];
        totalCost += itemPrice
    }
    return totalCost
}
 const myShoppingItemsPrice = shopping([20, 35, 10, 20, 15, 15, 10, 25, 40, 10, 100, 20, 15, 25, 20]);
 console.log(myShoppingItemsPrice)