class Player {
  constructor(name, score, fakeMoney) {
    this.name = name;
    this.score = score;
    this.fakeMoney = fakeMoney;
    this.dice = [];
    this.betAmount = 0;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setScore(score) {
    this.score = score;
  }

  getScore() {
    return this.score;
  }

  setFakeMoney(fakeMoney) {
    this.fakeMoney = fakeMoney;
  }

  getFakeMoney() {
    return this.fakeMoney;
  }

  setDice(diceValues) {
    this.dice = diceValues;
  }

  rollDice() {
    const diceValues = [];

    for (let i = 0; i < 5; i++) {
      diceValues.push(Math.floor(Math.random() * 6) + 1);
    }

    this.setDice(diceValues);
    return diceValues;
  }

  keepDice(keepIndexes) {
    const newDice = [];

    for (let i = 0; i < this.dice.length; i++) {
      if (keepIndexes.includes(i)) {
        newDice.push(this.dice[i]);
      } else {
        newDice.push(Math.floor(Math.random() * 6) + 1);
      }
    }

    this.setDice(newDice);
  }

  setBetAmount(amount) {
    this.betAmount = amount;
  }

  getBetAmount() {
    return this.betAmount;
  }
}
