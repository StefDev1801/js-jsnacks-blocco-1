// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa

let guestGatsby = ['qui', 'quo', 'qua']

let nameUser = prompt('Tell me ur name');

console.log(nameUser);

let a = 0;

for (let index = 0; index < guestGatsby.length; index++) {
    let element = guestGatsby[index];

    console.log(element);
    
    if (nameUser == element) {
        console.log('You are welcome');
        a++
        break;
    }
    
}if (a==0) {
    console.log('Go away');
    
}




