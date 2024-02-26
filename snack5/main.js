console.log('ou');
//Crea un array vuoto. 
let emptyArray = []
//Chiedi per 6 volte all’utente di inserire un numero, 
/*
for (let i = 0; i < 6; i++) {
    let userNumber = prompt('insert a number' + i)
    //se è dispari inseriscilo nell’array
    if (userNumber % 2 == 1) {
        emptyArray.push(userNumber)
    }
}
 */
let i = 0
while (i < 6) {
    let userNumber = prompt('insert a number' + i)
    //se è dispari inseriscilo nell’array
    if (userNumber % 2 == 1) {
        emptyArray.push(userNumber)
    }
    i++
}
console.log(emptyArray);
