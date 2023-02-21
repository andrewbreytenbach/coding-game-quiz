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
const initialsElement = document.getElementById("initials");
const submitButton = document.getElementById("submit-button");

const timeLimit = 75; // set the time in seconds

// Declared a few variables that will be reassigned later in the js file. 
let currentQuestionIndex;
let timeLeft;
let timerId;
let score = 0;

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
        question: "String values must be enclosed within _________ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answerIndex: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answerIndex: 3
    },
];

// Created a function that can be called to start the quiz when the start button is clicked and it begins with the first question. 
function startQuiz () {
    currentQuestionIndex = 0;
    timeLeft = timeLimit;
    timerId = setInterval(updateTime, 1000);
    showQuestion();
    startButton.style.display = "none";
    quizContainer.style.display = "block";
}

// Created a function that shows the question when the button is clicked and displays the options as well. 
function showQuestion () {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option; // add this line to set the button text
      button.addEventListener("click", () => checkAnswer(index));
      optionsElement.appendChild(button);
    });
  }


// This calls a function to check if the answer is correct, then increase the point total or decrease the time for an incorrect answer. 
function checkAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (index === question.answerIndex) {
      feedbackElement.textContent = "Correct!";
      score += 10;
    } else {
        feedbackElement.textContent = "Incorrect!"
        timeLeft -= 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    }
    scoreElement.textContent = score; // Add this line to update the score element
    disableOptions();
    showNextButton();
}


// This function disables the answer options. 
function disableOptions() {
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true;
    });
} 

// This function enables the answer options. 
function enableOptions() {
        const buttons = optionsElement.querySelectorAll("button");
        buttons.forEach(button => {
            button.disabled = false;
        });
}

// This function shows the next button using block display. 
function showNextButton() {
    nextButton.style.display = "block";
}

// This function hides the next button using display none. 
function hideNextButton() {
    nextButton.style.display = "none";
}

// This functions enables the answer buttons for the next question and clears the feedback message. 
function showNextQuestion () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        enableOptions();
        hideNextButton();
        feedbackElement.textContent = "";
        showQuestion();
    } else {
        endQuiz();
    }
}

// This function will update the time that is being displayed to the HTML and whent he time htis zero, it will end the quiz. 
function updateTime ()  {
    timeLeft--;
    if (timeLeft <= 0) {
        endQuiz();
    } else {
        timeElement.textContent = timeLeft;
    }
}

// This function ends the quiz when the timer is done, and it displays the game over message to the HTML. 
function endQuiz () {
    clearInterval(timerId)
    scoreElement.textContent = score;
    quizContainer.style.display = "none";
    gameOverContainer.style.display = "block";
}

// This functions calls for the user to type their initials and then sotres their score to local storage, redirecting them to the high scores page to view their score. 
function submitScore() {
    const initials = initialsElement.value;
    const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    highScores.push({ initials, score: score });
    localStorage.setItem("highscores", JSON.stringify(highScores));
    window.location.href = "highscores.html"
}

submitButton.addEventListener("click", submitScore);
  

// This adds event listeners so that when these buttons are clicked, a function is called. 
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", showNextQuestion);



