console.log('hi');
//inserisci 10 prompt
//somma i 10 numeri
/*
for (let index = 0; index < 10; index++) {
    
    let choosenNumber = prompt('say number');
    let realNumber = parseFloat(Number);
    somma+=realNumber;   
}
*/
let somma = 0;
let i = 0;

while (i<10) {
    let number = prompt('inserisci un numero');
    let realNumber = parseInt (number);
    somma += realNumber;
    i++
}

alert(somma)