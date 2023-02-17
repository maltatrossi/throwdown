class Dice {
  constructor() {
    this.values = [1, 1, 1, 1, 1];
  }

  rollAll() {
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = Math.floor(Math.random() * 6) + 1;
    }
  }

  keep(keepIndexes) {
    for (let i = 0; i < this.values.length; i++) {
      if (!keepIndexes.includes(i)) {
        this.values[i] = Math.floor(Math.random() * 6) + 1;
      }
    }
  }

  getValues() {
    return this.values;
  }

  display() {
    const diceDisplay = document.getElementById('dice-display');

    diceDisplay.innerHTML = '';

    for (let i = 0; i < this.values.length; i++) {
      const die = document.createElement('div');
      die.classList.add('die');
      die.classList.add('die-' + this.values[i]);
      diceDisplay.appendChild(die);
    }
  }
}
