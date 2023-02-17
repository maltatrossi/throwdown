class Wallet {
  constructor(money) {
    this.money = money;
  }

  add(amount) {
    this.money += amount;
  }

  subtract(amount) {
    if (this.money - amount < 0) {
      throw new Error('Insufficient funds');
    }

    this.money -= amount;
  }

  getMoney() {
    return this.money;
  }
}

module.exports = { Wallet };
