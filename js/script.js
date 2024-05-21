const correctOut = document.querySelector("h1.correct")
const mainOut = document.querySelector("h1.main")
const randomNumber = randomNumberGenerator()
let correctNumbers = [];
let timer = 5;

//Stampo i numeri da ricordare
mainOut.innerHTML = "I numeri da ricordare sono: " + randomNumber.join(" - ")

//Dopo 30 secondi inizio la funzione
setTimeout(function () {
    //Cancello i numeri da ricordare
    mainOut.innerHTML = ""

    //Inizio subito un altra funzione
    setTimeout(function () {

        //Controllo l'uguaglianza dei numeri
        controllo(randomNumber, correctNumbers)

        //Stampo in pagina a seconda dei risultati
        out(correctNumbers, correctOut, randomNumber)

    }, 1);
}, 30000);

//Funzione per stampare nel dom i risultati
function out(correctNumbers, correctOut, randomNumber) {
    //Stampo i numeri che dovevo ricordare
    mainOut.innerHTML = "I numeri da ricordare erano: " + randomNumber.join(" - ")
    //Se non ho ricordato nemmeno un numero stampo....
    if (correctNumbers.length == 0) {
        correctOut.innerHTML = "Peccato non hai ricordato nessun numero, ritenta sarai più fortunato";
        correctOut.classList.add("red");
        //Se ho ricordato almeno un numero stampo i numeri ricordati
    } else {
        correctOut.innerHTML = "Numeri indovinati: " + correctNumbers.join(" - ")
        correctOut.classList.add("green");
    }

}

//Funzione per controllare se i numeri inseriti sono uguali a quelli visualizzati precedentemente
function controllo(randomNumber, correctNumbers) {

    for (let index = 0; index < 5; index++) {
        let userNum = Number.parseInt(prompt("Inserisci il numero che ricordi"), 10);
        if (randomNumber.includes(userNum) && (correctNumbers.includes(userNum) == false)) {
            correctNumbers.push(userNum);
        }
    }
}

//Funzione per creare un numero casuale
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

//Funzione per prendere un numero casuale unico da 1 a 10
function randomNumberGenerator() {
    let array = [];

    for (let index = 0; index < 5; index++) {
        let number = getRandomNumber(1, 10);
        while (array.includes(number)) {
            number = getRandomNumber(1, 10);
        }
        array.push(number);
    }
    return array;
}