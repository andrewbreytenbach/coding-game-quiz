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
