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
submitBtn.addEventListener(
    "click",
    (displayNext = () => {
      // This increases the question count that will be displayed on the HTML each time. 
      questionCount += 1;
      // if last question
      if (questionCount == quizArray.length) {
        // hide question container and display score
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        // This displays the user score to the HTML file.
        userScore.innerHTML =
          "Your score is " + scoreCount + " out of " + questionCount;
      } else {
        // display questionCount
        countOfQuestion.innerHTML =
          questionCount + 1 + " of " + quizArray.length + " Question";
        // This displays the quiz and runs the needed functions.
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

// This is the function we will call later on in the js file to run the quiz.
function quizCreator() {
    // This randomnly sorts the question order so it is different each time.
    quizArray.sort(() => Math.random() - 0.5);
    // This is the for statement that will generate the quiz.
    for (let i of quizArray) {
      // This randomnly sorts the question answer options so it is different each time.
      i.options.sort(() => Math.random() - 0.5);
      // This creates a div in the html that will display the question and the answers.
      let div = document.createElement("div");
      div.classList.add("container-mid", "hide");
      // This specifies the question number that will be displayed on the HTML
      countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
      // This uses js to display the correct question.
      let question_DIV = document.createElement("p");
      question_DIV.classList.add("question");
      question_DIV.innerHTML = i.question;
      div.appendChild(question_DIV);

      // This lists the four answer options for each question.
      div.innerHTML += `
      <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
         <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
      `;
      quizContainer.appendChild(div);
    }
  }

// This calls a function to check if option is correct or not and then add the necessary points to their score. 
function checker(userOption) 
    let userSolution = userOption.innerText;
    let question =
      document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
      userOption.classList.add("correct");
      scoreCount++;
    } else {
      userOption.classList.add("incorrect");
      // For marking the correct option
      options.forEach((element) => {
        if (element.innerText == quizArray[questionCount].correct) {
          element.classList.add("correct");
        }
      });
    }

// This function determines the initial layout of the webpage upon visiting the site. 
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
  }


// This adds an event listener for when the user hits the start button that will begin the quiz. 
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
  });

// This tells the website to hide the quiz upon initially loading, until the user hits the start button.
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
  };