const randomNumber = randomNumberGenerator()
console.log(randomNumber)



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