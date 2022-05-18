/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Formula per il calcolo: km * 0.21 = prezzoBiglietto
Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo: 24,50
BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili?
*/

let km = prompt("Inserisci il numero di chilometri che vuoi percorrere");
let age = prompt("Inserisci la tua età");
let price = km * 0.21;
const youngdiscount = 0.2;
const elderdiscount = 0.4;
const totalprice = document.getElementById("totalprice");

if (age < 18) {
  totalprice.innerHTML = (price - price * youngdiscount).toFixed(2);
} else totalprice.innerHTML = price;
if (age > 65) {
  totalprice.innerHTML = (price - price * elderdiscount).toFixed(2);
}

const displaykm = document.getElementById("kminput");
const displayage = document.getElementById("ageinput");
displaykm.innerHTML = km;
displayage.innerHTML = age;
