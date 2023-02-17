// Used query selector to set all the variables I will need for the function.
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("#questions-container");
let submitBtn = document.getElementById("#submit-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("#display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("#user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("#start-button");
let questionCount;
let scoreCount = 0;
let count = 75;
let countdown;

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
  
// Added an event listener to the submit button so that the answer is submitted and the next questino shows up.
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
      //increment questionCount
      questionCount += 1;
      //if last question
      if (questionCount == quizArray.length) {
        //hide question container and display score
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        //user score
        userScore.innerHTML =
          "Your score is " + scoreCount + " out of " + questionCount;
      } else {
        //display questionCount
        countOfQuestion.innerHTML =
          questionCount + 1 + " of " + quizArray.length + " Question";
        //display quiz
        quizDisplay(questionCount);
        count = 75;
        clearInterval(countdown);
        timerDisplay();
      }
    })
  );

// Added a countdown timer by using a set interval function.
const timerDisplay = () => {
    countdown = setInterval(() => {
      count--;
      timeLeft.innerHTML = `${count}s`;
      if (count == 0) {
        clearInterval(countdown);
        displayNext();
      }
    }, 1000);
  };