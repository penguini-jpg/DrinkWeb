/* File: assets/js/script.js
   Title: Basic Interactivity for Drinking Mini Games Pages
   Description: Contains JavaScript functions to navigate between pages and manage interactive controls.
*/

/* Navigation Functions */
function navigateToGameHome() {
  window.location.href = "game-home.html";
}

function navigateToSettings() {
  window.location.href = "settings.html";
}

function goBack() {
  window.location.href = "index.html";
}

/* Game Home Screen Interactivity Functions */
function increasePlayerCount() {
  const playerCountBtn = document.getElementById("player-count");
  let currentCount = parseInt(playerCountBtn.textContent, 10);
  playerCountBtn.textContent = currentCount + 1;
  updateGameAvailability();
}

function decreasePlayerCount() {
  const playerCountBtn = document.getElementById("player-count");
  let currentCount = parseInt(playerCountBtn.textContent, 10);
  if (currentCount > 1) {
    playerCountBtn.textContent = currentCount - 1;
    updateGameAvailability();
  }
}

function editPlayerSettings() {
  const playerCount = document.getElementById("player-count").textContent;
  window.location.href = "player-edit.html?players=" + playerCount;
}

/* Update game button availability based on player count */
function updateGameAvailability() {
  const playerCount = parseInt(document.getElementById("player-count").textContent, 10);
  const gameButtons = document.querySelectorAll(".game-button");
  gameButtons.forEach(button => {
    const min = parseInt(button.getAttribute("data-min"), 10);
    const max = parseInt(button.getAttribute("data-max"), 10);
    if (playerCount >= min && playerCount <= max) {
      button.classList.add("available");
      button.classList.remove("unavailable");
      button.style.pointerEvents = "auto";
    } else {
      button.classList.add("unavailable");
      button.classList.remove("available");
      button.style.pointerEvents = "none";
    }
  });
}

/* Handle game selection */
function selectGame(gameName) {
  if (gameName === "tic-tac-toe") {
    window.location.href = "tic-tac-toe.html";
  } else if (gameName === "roulette") {
    alert("Roulette game not implemented yet.");
  } else if (gameName === "knock-out") {
    alert("Knock Out game not implemented yet.");
  } else if (gameName === "random-timer") {
    window.location.href = "random-timer-settings.html";
  } else if (gameName === "rock-paper-scissors") {
    alert("Rock Paper Scissors game not implemented yet.");
  }
}

/* Display player details on the game home screen with two stacked score circles */
function displayPlayerDetails() {
  const container = document.getElementById("player-display");
  container.innerHTML = "";
  const players = JSON.parse(localStorage.getItem("playerDetails") || "[]");
  players.forEach(player => {
    const playerContainer = document.createElement("div");
    playerContainer.className = "player-info";
    
    // Player name oval
    const playerOval = document.createElement("div");
    playerOval.className = "player-oval";
    playerOval.style.backgroundColor = player.color;
    playerOval.textContent = player.name;
    
    // Score container for two stacked circles
    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    
    // Top circle: Drinks score with beer emoji
    const drinksCircle = document.createElement("div");
    drinksCircle.className = "drinks-circle";
    drinksCircle.textContent = "🍺 " + (player.score || "0");
    
    // Bottom circle: Wins count with diagonal "W" in green
    const winsCircle = document.createElement("div");
    winsCircle.className = "wins-circle";
    winsCircle.textContent = "W " + (player.wins || "0");
    
    scoreContainer.appendChild(drinksCircle);
    scoreContainer.appendChild(winsCircle);
    
    playerContainer.appendChild(playerOval);
    playerContainer.appendChild(scoreContainer);
    
    container.appendChild(playerContainer);
  });
}
