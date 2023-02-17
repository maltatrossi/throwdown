import { getRoundWinner, revealDice } from './rules.js';

export function startGame() {
  // TODO: Initialize game state and start the first round of the game
}

export function rollDice() {
  // TODO: Roll the current player's dice and update the game state
}

export function keepDice(keepIndexes) {
  // TODO: Keep the specified dice and roll the remaining dice, then update the game state
}

export function placeBet(amount) {
  // TODO: Set the current player's bet amount and update the game state
}

export function reveal() {
  // TODO: Reveal the dice for all players and determine the winner, then update the game state
  const winnerIndex = getRoundWinner();
  revealDice(winnerIndex);
}

export function handleGameEvent(event) {
  // TODO: Handle incoming game events from the server and update the game state
}
