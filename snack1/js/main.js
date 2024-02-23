/* L'utente inserisce due numeri in successione, con 2 prompt */
const number1 = prompt('insert first number');
const number2 = prompt('insert second number');
const array2Numbers = [];
array2Numbers.push(number1,number2);

console.log('first: ' + number1 + ', second: ' + number2);
for (let index = 0; index < array2Numbers.length; index++) {
    const element = array2Numbers[index];
    console.log(element);
    if (number1>number2) {
        console.log('The bigger number is: ' + number1);
        
    }else {
        console.log('The bigger number is: ' + number2);
        
    }
}
