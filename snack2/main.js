// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const word1 = prompt('insert first word');
const word2 = prompt('insert second word');



if (word1.length>word2.length) {
    console.log(word1 + ' ' + word2);

} else if(word1.length < word2.length){
    console.log(word2 + ' ' + word1);
}else{
    console.log('the words have the same number of letters: '+ word1 + ' ' + word2);

}


