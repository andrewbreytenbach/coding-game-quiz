// Used the getElement function to set all of the constants I will need for the function.
const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const timeElement = document.getElementById("time");
const gameOverContainer = document.getElementById("game-over-container");
const scoreElement = document.getElementById("score");
const intitialsElement = document.getElementById("initials");
const timeLimit = 75; // set the time in seconds

// Declared a few variables that will be reassigned later in the js file. 
let currentQuestionIndex;
let timeLeft;
let timerId;

// Created an array with the quiz questions inside of it. 
const questions = [
    {
        question: "Commonly used data types do NOT include: ",
        options: ["strings", "numbers", "alerts", "booleans"],
        answerIndex: 2
    },
    {
        question: "The condition in an if/else statement is enclosed with ___________",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answerIndex: 1
    },
    {
        question: "Arrays in JavaScript can be used to store ____________",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answerIndex: 3
    },
    {
        question: "String values must be encolsed within _________ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answerIndex: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answerIndex: 3
    },
];