function makeBank() {
  let lastAccountNumber = 101;
  let accounts = [];

  function makeAccount(number){
    let balance = 0;
    let transactions = [];

    return {
      number() {
        return number;
      },

      balance() {
        return balance;
      },

      transactions() {
        return transactions;
      },

      deposit(amt) {
        balance += amt;
        transactions.push({type: 'deposit', amount: amt})
        return amt;
      },

      withdraw(amt) {
        amt = Math.min(amt, balance);
        balance -= amt;
        transactions.push({type: 'withdrawal', amount: amt})
        return amt;
      },
    };
  }

  return {
    openAccount() {
      let newAccount = makeAccount(lastAccountNumber);
      lastAccountNumber += 1;
      accounts.push(newAccount);
      return newAccount;
    },

    transfer(source, destination, amt) {
      return destination.deposit(source.withdraw(amt));
    },
  }
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [{...}]
console.log(bank.accounts);