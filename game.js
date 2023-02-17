/. Game logic
1. Set up game variables (e.g. number of rounds, number of players, game state)
2. Connect to the server using WebSocket or socket.io
3. Implement authentication using Passport.js and a MongoDB database
4. Implement a lobby system to allow players to join and leave the game
5. Implement the player adding logic to add players to the game
6. Initialize the game
	- Set up the game board and any necessary variables
	- Ensure all players are connected and ready to play
7. Start the game
	- Check that there are enough players to start the game (e.g. at least 2)
	- Randomly assign each player a set of dice
	- Set a maximum number of rounds (e.g. 3)
	- Start the first round
8. Play each round

	- Give each player a chance to roll their dice (e.g. set a timer or have a "ready" button)
	- Wait for all players to finish rolling before revealing any dice
	- Display the results of each player's roll and update the game board accordingly
	- Repeat for each round until the maximum number of rounds is reached
9. Determine the winner
	- Calculate the score for each player based on the values of their rolled dice
	- Determine the winner based on the highest score
	- In the case of a tie, have a tiebreaker round
10. End the game
	- Update player statistics and high scores in the database
	- Display the final results and allow players to play again or quit the game
10. Implement the game restart logic to start a new game when the current one is over
11. Use the Wallet class in wallet.js to allow players to manage their in-game currency, with the data stored in a MongoDB database.
12. Set up a MongoDB database to store player progress and high scores
./

class DicePokerGame {
  constructor(players) {
    this.players = players;
    this.currentRound = 1;
    this.maxRounds = 3;
  }

  start() {
    // start the game
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].resetDice();
    }
    this.currentRound = 1;
    this.rollDiceForCurrentRound();
  }

  rollDiceForCurrentRound() {
    // roll dice for current round
    for (let i = 0; i < this.players.length; i++) {
      let player = this.players[i];
      if (!player.isDoneRolling() && !player.isOut()) {
        player.rollDice();
      }
    }
    if (this.areAllPlayersDoneRolling()) {
      this.endRound();
    }
  }

  endRound() {
    // end the round and show dice results
    let results = {};
    for (let i = 0; i < this.players.length; i++) {
      let player = this.players[i];
      let diceValues = player.getDiceValues();
      results[player.getName()] = diceValues;
    }
    console.log("Round " + this.currentRound + " results: ", results);
    if (this.currentRound === this.maxRounds) {
      this.endGame();
    } else {
      this.currentRound++;
      this.startNextRound();
    }
  }

  startNextRound() {
    // start the next round
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].resetDice();
    }
    this.rollDiceForCurrentRound();
  }

  endGame() {
    // end the game and show final results
    let results = [];
    for (let i = 0; i < this.players.length; i++) {
      let player = this.players[i];
      let diceValues = player.getDiceValues();
      let total = diceValues.reduce((a, b) => a + b, 0);
      results.push({ name: player.getName(), total: total });
    }
    results.sort((a, b) => b.total - a.total);
    console.log("Final results: ", results);
  }

  areAllPlayersDoneRolling() {
    // check if all players are done rolling for the current round
    for (let i = 0; i < this.players.length; i++) {
      if (!this.players[i].isDoneRolling() && !this.players[i].isOut()) {
        return false;
      }
    }
    return true;
  }
}

class Player {
  constructor(name, walletId) {
    this.name = name;
    this.walletId = walletId;
    this.dice = [0, 0, 0, 0, 0];
    this.numRolls = 0;
    this.out = false;
  }

  getName() {
    return this.name;
  }

  getWalletId() {
    return this.walletId;
  }

  getDiceValues() {
    return this.dice;
  }

  rollDice() {
    // roll the player's dice
    for (let i = 0; i < 5; i++) {
      if (this.dice[i] === 0) {
        this.dice[i] = Math.floor(Math.random() * 6) + 1;
      }
    }
    this.numRolls++;
  }

  resetDice() {
    // reset the player's dice for a new round
    this.dice = [0
