const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessHistory = [];

document.getElementById('guessButton').addEventListener('click', function() {
    const guessInput = document.getElementById('guessInput').value;
    const guess = Number(guessInput);
    const feedback = document.getElementById('feedback');
    const history = document.getElementById('history');

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    guessHistory.push(guess);

    if (guess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
    } else if (guess > randomNumber) {
        feedback.textContent = "Too high! Try again.";
    } else {
        feedback.textContent = `Congratulations! You guessed the number ${randomNumber}.`;
        feedback.style.color = 'blue';
        document.getElementById('guessButton').disabled = true;
        document.getElementById('guessInput').disabled = true;
    }

    history.textContent = `Your guesses: ${guessHistory.join(', ')}`;
});
