// Used query selector to set all the variables I will need for the function.
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let submitBtn = document.getElementById("submit-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let nameInput = document.getElementById('name-input');
const PENALTY_DURATION = 10;
let scoreCount = 0;
let count = 75;
let startTime, elapsedTime = 0;
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

// Added an event listener to the restart button so that the quiz restarts when this button is clicked.
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
  });

  const handleWrongAnswer = () => {
    elapsedTime += 10;
    timeLeft.innerHTML = `${75 - elapsedTime}s`;
    if (elapsedTime >= 75) {
      clearInterval(countdown);
      timeLeft.innerHTML = "";
    }
  }

  
  const timerDisplay = () => {
    countdown = setInterval(() => {
      elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      timeLeft.innerHTML = `${75 - elapsedTime}s`;
      if (elapsedTime >= 75) {
        clearInterval(countdown);
        timeLeft.innerHTML = ""
      }
    }, 1000);
  };
    


// Added an event listener to the submit button so that the answer is submitted and the next questino shows up.
submitBtn.addEventListener(
    "click",
    (displayNext = () => {
      // This increases the question count that will be displayed on the HTML each time. 
      questionCount += 1;
      //if last question
      if (questionCount == quizArray.length) {
        //hide question container and display score
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        // This displays the user score to the HTML file.
      
      localStorage.setItem("quizScore", scoreCount);
      } else {
        quizDisplay(questionCount);
      }
    })
  );


const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    
    quizCards.forEach((card) => {
      card.classList.add("hide");
    });
   
    quizCards[questionCount].classList.remove("hide");
  };
  
  // This is the function we will call later on in the js file to run the quiz.
  function quizCreator() {
    startTime = Date.now();
    timerDisplay();
    // This randomnly sorts the question order so it is different each time.
    quizArray.sort(() => Math.random() - 0.5);
   
    // This is the for statement that will generate the quiz.
    for (let i of quizArray) {
      
        // This randomnly sorts the question answer options so it is different each time.
      i.options.sort(() => Math.random() - 0.5);
      
      // This creates a div in the html that will display the question and the answers.
      let div = document.createElement("div");
      div.classList.add("container-mid", "hide");
      
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

// This function determines the initial layout of the webpage upon visiting the site. 
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question = document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");
  let submitFeedback = document.getElementById("submit-feedback"); // get the message element from the HTML

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount += 10;
    // If the user's solution is correct, display "Correct" in the message element
    submitFeedback.textContent = "Correct!";
  } else {
    userOption.classList.add("incorrect");
    handleWrongAnswer();

    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
    // If the user's solution is incorrect, display "Incorrect" in the message element
    submitFeedback.textContent = "Incorrect!";
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

// This function determines the initial layout of the webpage upon visiting the site. 
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 75;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
  const storedScore = localStorage.getItem("quizScore");
  if (storedScore) {
    userScore.innerHTML = "Your previous score was " + storedScore;
  }
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

localStorage.setItem("quizScore", scoreCount);
let highScore = localStorage.getItem("quizScore");
if (highScore === null || scoreCount > highScore) {
  localStorage.setItem("quizScore", scoreCount);
  highScore = scoreCount;
}
userScore.textContent = highScore;


