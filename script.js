
// Created an object with the first question inside of it. 
let questionOne = {
    title: 'Commonly used data types DO NOT include',
    alternatives: ['strings', 'numbers', 'alerts', 'numbers'],
    correctAnswer: 2
  };

// Created a function that will display the remaining time in the game to the HTML.
document.querySelector(".start-button").addEventListener("click", function() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        timeLeft--;
        document.querySelector(".timer-count").textContent = timeLeft + " seconds left"
        if (timeLeft === 0) {
            clearInterval(timeInterval)
        }
    }, 1000);
})