class BankAccount {
  #balance = 0;

  #checkBalance() {
    return this.#balance;
  }

  deposit(amt) {
    return this.#balance += amt;
  }

  withdraw(amt) {
    if (amt <= this.#checkBalance()) {
      return this.#balance -= amt;
    } else {
      throw new RangeError('Insufficient funds');
    }
  }
}

let account = new BankAccount();
console.log(account.deposit(100));
console.log(account.withdraw(50));
console.log(account.withdraw(100)); // RangeError: Insufficient funds