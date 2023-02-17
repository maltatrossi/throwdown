class Wallet {
  constructor(balance) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds";
    }
    this.balance -= amount;
    return this.balance;
  }
}

const wallet = new Wallet(1000);
const balanceDisplay = document.getElementById("balance");
balanceDisplay.textContent = "$" + wallet.getBalance();

const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

depositBtn.addEventListener("click", function() {
  const amount = parseInt(prompt("Enter deposit amount:"));
  if (amount) {
    wallet.deposit(amount);
    balanceDisplay.textContent = "$" + wallet.getBalance();
  }
});

withdrawBtn.addEventListener("click", function() {
  const amount = parseInt(prompt("Enter withdrawal amount:"));
  if (amount) {
    const result = wallet.withdraw(amount);
    if (typeof result === "string") {
      alert(result);
    } else {
      balanceDisplay.textContent = "$" + result;
    }
  }
});
