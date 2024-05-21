const randomNumber = randomNumberGenerator()
const mainOut = document.querySelector("h1.main")
const correctOut = document.querySelector("h1.correct")
let correctNumbers = [];
let timer = 5;

mainOut.innerHTML = "I numeri da ricordare sono: " + randomNumber.join(" - ")


setTimeout(function () {
    mainOut.innerHTML = ""

    setTimeout(function () {
        controllo(randomNumber, correctNumbers)

        out(correctNumbers, correctOut, randomNumber)

    }, 1);
}, 30000);


function out(correctNumbers, correctOut, randomNumber) {
    mainOut.innerHTML = "I numeri da ricordare erano: " + randomNumber.join(" - ")
    if (correctNumbers.length == 0) {
        correctOut.innerHTML = "Peccato non hai ricordato nessun numero, ritenta sarai più fortunato";
        correctOut.classList.add("red");
    } else {
        correctOut.innerHTML = "Numeri indovinati: " + correctNumbers.join(" - ")
        correctOut.classList.add("green");
    }

}




function controllo(randomNumber, correctNumbers) {

    for (let index = 0; index < 5; index++) {
        let userNum = Number.parseInt(prompt("Inserisci il numero che ricordi"), 10);
        if (randomNumber.includes(userNum) && (correctNumbers.includes(userNum) == false)) {
            correctNumbers.push(userNum);
        }

    }
    console.log(correctNumbers)
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

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