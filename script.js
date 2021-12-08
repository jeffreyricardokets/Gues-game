alert("Welcome! What is your name ?")

let personName = prompt("Please enter your username :");
let triesUser = 5;
alert(`hey ${personName}`)
let lowestNumberString = prompt("Please enter the game's minimum number :");
let lowestNumber = parseInt(lowestNumberString)
let highestNumberString = prompt("Please enter the game's maximum number :");
let highestNumber = parseInt(highestNumberString)
alert(`Enter a number between ${lowestNumber} and ${highestNumber} to start guessing...`)

const askNumber = function () {
    if (triesUser > 0) {
        let personNumber = prompt("Please enter a number :")
        giveMessageToUser(personNumber)
    } else {
        alert("You lost the game!! You have no tries left")
    }
}

const getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    /* console.log(randomNumber)
    return randomNumber; */
}

const checkNumberCorrect = function (numberPerson) {
    if (numberPerson == RandomNumber) {
        return true;
    } else {
        return false;
    }
}

const giveMessageToUser = function (personNumber) {
    if (checkNumberCorrect(personNumber)) {
        alert("Congratulations, you have won the game!")
        alert(`Bye ${personName}, see you!`)
    } else {
        alert("Unfortunately, that is not correct!")
        triesUser = triesUser - 1
        alert(`You have ${triesUser} tries left`)
        askNumber()
    }
}
let RandomNumber = getRandomNumber(lowestNumber, highestNumber);
askNumber()






