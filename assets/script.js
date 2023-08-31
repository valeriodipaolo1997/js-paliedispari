/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto. */



//definisco le variabili
const userSelection = prompt("pari o dispari?");
const userNumber = Number(prompt("Scegli un numero da 1 a 5"));

//uso una funzione per generare un numero casuale da 1 a 5
function numberSelection() {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

//stampo in console la scelta dell utente e del computer
console.log("Hai scelto il numero " + userNumber);
let computerNumber = numberSelection();
console.log("il computer sceglie " + computerNumber);
