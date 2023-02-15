 

//Created an array witht the quiz questions inside of it.
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
      options: ["commas", "culry brackets", "quotes", "parenthesis"],
      correct: "quotes",
    },
    {
      id: "4",
      question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
      options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
      correct: "console.log",
      },
  ];

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