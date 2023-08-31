/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto. */

/*

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

//faccio la somma tra la scelta dell utente e quella del computer
let sum = userNumber + computerNumber;
console.log("Il totale è " + sum);


//uso una funzione per decretare il vincitore
function evenOrOdd(){
    if (sum % 2 === 0 && userSelection === "pari") {
        console.log('Pari, hai vinto');
    } else if (sum % 2 === 0 && userSelection === "dispari") {
        console.log("Pari, vince il computer");
    } else if (sum % 2 !== 0 && userSelection === "pari") {
        console.log("Dispari, vince il computer");
    } else if (sum % 2 !== 0 && userSelection === "dispari") {
        console.log("Dispari, hai vinto!");
    } 
    }
    
    //richiamo la funzione
    evenOrOdd()
*/

    /* Chiedere all’utente di inserire una parola 
    Creare una funzione per capire se la parola inserita è palindroma */

    
    const parola = prompt("scegli una parola");

const parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertiParola(str){
  const strInversa = str.split('').reverse().join(''); 
  return strInversa;
}