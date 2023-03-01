function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guess = prompt("Enter a number between 1 and 100.");
    let guessCount = 0;

    while (guessCount < totalGuesses) {
        if (parseInt(guess) < numToGuess) {
            guess = prompt(guess + " is too small. Guess a larger number.");
            guessCount++;
        }
        else if (parseInt(guess) > numToGuess) {
            guess = prompt(guess + " is too large. Guess a smaller number.");
            guessCount++;
        }
        else if (isNaN(guess) || guess === "") {
            guess = prompt("Please enter a number.");
        }
        else if (parseInt(guess) === numToGuess) {
            return guessCount + 1;
        }
        else if (guess === null) {
            return 0;
        }
    }
    return 0;
}