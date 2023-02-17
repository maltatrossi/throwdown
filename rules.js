// Variables to store game state
let currentPlayer = 0;
let players = [];
let dice = [];
let maxRolls = 3;
let timeLimit = 30;

// Initialize the game state with an array of player data
export function initializeGame(playerData) {
  // Create Player and Dice objects for each player
  players = playerData.map((data) => new Player(data.name, data.score, data.fakeMoney));
  dice = players.map(() => new Dice());

  // Set the current player to a random index
  currentPlayer = Math.floor(Math.random() * players.length);
}

// Calculate the score for each player's dice and return the index of the player with the highest score
export function getRoundWinner() {
  const scores = [];

  for (let i = 0; i < players.length; i++) {
    scores.push(getScore(dice[i].getValues()));
  }

  const maxScore = Math.max(...scores);
  const winnerIndex = scores.indexOf(maxScore);

  return winnerIndex;
}

// Display the dice values for all players, showing the winner of the round
export function revealDice(winnerIndex) {
  for (let i = 0; i < players.length; i++) {
    const diceValues = dice[i].getValues();
    const player = players[i];

    let message = player.getName() + ': ';

    for (let j = 0; j < diceValues.length; j++) {
      message += diceValues[j] + ' ';
    }

    if (i === winnerIndex) {
      message += 'WINNER';
    }

    console.log(message);
  }
}

// Calculate the score for a set of dice values, using the rules of the game
export function getScore(values) {
  // TODO: Implement scoring logic for dice values
}

// Get the current player object
export function getCurrentPlayer() {
  return players[currentPlayer];
}

// Advance to the next player in turn
export function nextPlayer() {
  currentPlayer = (currentPlayer + 1) % players.length;
}

// Get the current player's dice object
export function getDice() {
  return dice[currentPlayer];
}

// Get the maximum number of rolls per turn
export function getMaxRolls() {
  return maxRolls;
}

// Get the maximum time limit for decisions
export function getTimeLimit() {
  return timeLimit;
}
