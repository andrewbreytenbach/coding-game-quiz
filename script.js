// Created a function that will display the remaining time in the game to the HTML.
window.onload = function() { 
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        timeLeft--;
        document.querySelector("#timer").textContent = timeLeft + " seconds left"
        if (timeLeft === 0) {
            clearInterval(timeInterval)
            document.querySelector("#timer").textContent = ""
        }
    }, 1000);
};

// Created an array with the quiz questions inside of it.
const quizArray = [
    {
      id: "0",
      question: "Commonly used data types DO NOT include:",
      options: ["strings", "numbers", "alerts", "booleans"],
      correct: "alerts",
    },

    {
      id: "1",
      question: "The condition in an if/else statement is enclosed with ________",
      options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
      correct: "curly brackets",
    },

    {
      id: "2",
      question: "Arrays in JavaScript can be used to store _________",
      options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      correct: "all of the above",
    },

    {
      id: "3",
      question: "String values must be enclosed within _________ when being assigned to variables.",
      options: ["commas", "curly brackets", "quotes", "parenthesis"],
      correct: "quotes",
    },
    
    {
      id: "4",
      question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
      options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
      correct: "console.log",
      },
  ];

// Created a function to show the correct question and the correct answer options by passing the array into the function.
 function showQuestion(event) {
    let questionTitle = document.getElementById('#title');
    questionTitle.textContent = event.question;
  
    let answerOptions = document.querySelectorAll('#questions');
    answerOptions.forEach(function(element, index){
      element.textContent = event.options[index];
    });
  };

showQuestion(quizArray[0]);



// This part of the js code deals with the local storage and storing the high score of the game after each time it is played. 
localStorage.setItem('highScore', 'score');


var highScore = localStorage.getItem('highScore');

