console.log('oi');
//Stampa il cubo dei primi N numeri (dove N è un numero indicato dall’utente).
let numberList = []
//const wantToContinue = false 
// do{
//     let userNumber = Number(prompt('choose number'))
//     console.log(userNumber);
//     numberList.push(userNumber);
//     wantToContinue != confirm('continue?')    
    
// } while (wantToContinue){
//     console.log('out of do');
// }

let userLength=prompt('choose how many numbers');
let i=0;
while (i<userLength) {
    numberList.push(Number(prompt('add number')))
    i++
    console.log(numberList);
    //stampa il cubo dei numeri di numberList
    // console.log( Math.cbrt(numberList));

}
//NON VA

