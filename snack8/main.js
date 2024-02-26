//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero
/*for (let index = 0; index < number4.length; index++) {
    const element = array[index];
    
} */
// while (number4) {
    //     sum = 0
    //     sum += number4 
    //     //% 10;
    //     //value = Math.floor(value / 10);
    // }
    // console.log(sum);

/*
let fourDigitNumber = prompt('tell me a 4 digit number')
sum = 0;

while (fourDigitNumber) {
    sum += fourDigitNumber % 10;
    fourDigitNumber = Math.floor(fourDigitNumber / 10);
}

console.log(sum);
*/

//OR
let somma=0
let userNumber = prompt("insert number and i sum his digits")
for (let index = 0; index < userNumber.length; index++) {
    let element = userNumber[index];
    element = Number(element);
    somma+=element;
}
console.log(somma);
