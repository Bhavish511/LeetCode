/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let number = BigInt(digits.join(''));
    console.log(number)
    // number = Number(number);
    console.log("converted: "+number);
    number = number + 1n;
    console.log("plus one: "+ number);
    digits = Array.from(String(number), Number);
    console.log("Return: " +digits);
    // let size = (digits.length);
    // // console.log(digits[size]);
    // if(size > 1){
    //     if(digits[size-1]=== 9){
    //         digits[size-2] += 1;
    //     }
    //     else{
    //         digits[size-1] +=1;
    //     }
    // } else{
    //     if(digits[size-1]===9){
    //         digits.unshift(1);
    //         digits[size] = 0;  
    //     }
    //     else{
    //         digits[size-1] += 1;
    //     }
    // }
    return digits
};
