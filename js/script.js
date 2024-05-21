const randomNumber = randomNumberGenerator()
const mainOut = document.querySelector("h1.main")
let timer = 5;

mainOut.innerHTML = "I numeri da ricordare sono: " + randomNumber


setTimeout(function () {

    mainOut.innerHTML = ""

    controllo(randomNumber)




}, 2000);







function controllo(randomNumber) {
    let correctNumbers = [];

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