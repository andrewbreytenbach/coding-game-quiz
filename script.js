
// Created an object with the first question inside of it. 
var questionOne = {
    title: 'Commonly used data types DO NOT include',
    alternatives: ['strings', 'numbers', 'alerts', 'numbers'],
    correctAnswer: 2
  };

// Created an object with the second question inside of it. 
var questionTwo = {
    title: 'The condition in an if/else statement is enclosed with ________',
    alternatives: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
    correctAnswer: 1
  };

// Created an object with the third question inside of it. 
var questionThree = {
    title: 'Arrays in JavaScript can be used to store _________',
    alternatives: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 3
  };

// Created an object with the fourth question inside of it. 
var questionFour = {
    title: 'String values must be enclosed within _________ when being assigned to variables.',
    alternatives: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    correctAnswer: 2
  };

// Created an object with the fifth question inside of it. 
var questionFive = {
    title: 'A very useful tool used during development and debugging for printing content to the debugger is: ',
    alternatives: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
    correctAnswer: 3
  };

// Created a function to show the correct question and the correct answer options.
  function showQuestion(event) {
    
    let questionTitle = document.getElementById('title');
    questionTitle.textContent = event.title;

    let answerOptions = document.querySelectorAll('.alternative');
    console.log(answerOptions);
    answerOptions.forEach(function(element, index){
      element.textContent = event.alternatives[index];
    });
  }

// Created a function that will display the remaining time in the game to the HTML.
window.onload = function() { 
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        timeLeft--;
        document.querySelector("#timer").textContent = timeLeft + " seconds left"
        if (timeLeft === 0) {
            clearInterval(timeInterval)
        }
    }, 1000);
};