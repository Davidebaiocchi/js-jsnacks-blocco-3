//  1.      Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  
//          La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// creazione dei due array:
var arrayIniziale = ['giulia', 'davide', 'lucia', 'marco', 'andrea'];
console.log(arrayIniziale);
var arrayFinale = [];

// inserire numeri
var a = parseInt(prompt('Inserire numero'));
var b = parseInt(prompt('Inserire numero'));

arrayFinale = selezione(arrayIniziale, a, b);

function selezione(array, min, max) {
    var arrayFiltrato = [];

    for(i= 0; i < arrayIniziale.length; i++) {
        if(i >= a && i <= b) {
            arrayFiltrato.push(arrayIniziale[i]);
        }
    }   
    return arrayFiltrato;
} 
console.log(arrayFinale);








//  2.      Dare la possibilità di inserire due parole. 
//          Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.   
//          Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// Inserimento parole Utente 
var parola1 = prompt('inserisci prima parola');
console.log(parola1);
var parola2 = prompt('inserisci seconda parola');
console.log(parola2);

comparazione(parola1, parola2);

function comparazione(x, y) {
    var lunghezza = x.length - y.length;
    
    if (lunghezza > 0) {
        alert('la parola più lunga è: ' + x);
    } else if (lunghezza < 0) {
        alert('la parola più lunga è: ' + y);
    } else {   
        alert('Le parole hanno la stessa lunghezza perciò le unisco: ' + x + y);
    }
}







//  3.      Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli 
//          elementi da uno e dall’altroes. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// creo i 3 array
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array1);

var array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
console.log(array2);

var arrayFinale = [];

arrayFinale = unioneArray(array1, array2, arrayFinale);

function unioneArray(x, y, a) {
    for(i = 0; i < x.length & i < y.length; i++) {
        a.push(x[i] + y[i]);
    }
    return a; 
}
console.log(arrayFinale);




//  4.      Scrivi una funzione che prenda una stringa e la trasformi 
//          con l'iniziale maiuscola e tutto il resto in minuscolo.

var stringa = prompt("inserisci una parola");
console.log(stringa);

capstring('stringa');
function capstring(a) {
    return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
  }

console.log(capstring(stringa));  