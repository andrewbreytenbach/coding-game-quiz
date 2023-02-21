  // This is the js code for the highscores table. It stores the values using local storage, then uses appendChild to add new rows for each time the quiz is taken again. 
  const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
  const tableBody = document.querySelector("#high-scores-table tbody");

  highScores.forEach(score => {
     const row = document.createElement("tr");
     const initialsCell = document.createElement("td");
     const scoreCell = document.createElement("td");

     initialsCell.textContent = score.initials;
     scoreCell.textContent = score.score;

     row.appendChild(initialsCell);
     row.appendChild(scoreCell);
     tableBody.appendChild(row);
  });