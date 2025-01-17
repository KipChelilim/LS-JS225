let invoices = {
  unpaid: [],
  paid: [],

  add(name, amount) {
    this.unpaid.push({
      name,
      amount,
    });
  },

  totalDue() {
    return this.unpaid.reduce((total, invoice) => total += invoice.amount, 0);
  },

  totalPaid() {
    return this.paid.reduce((total, invoice) => total += invoice.amount, 0);
  },

  payInvoice(clientName) {
    let remainingUnpaidInvoices = [];

    this.unpaid.forEach((invoice) => {
      if (invoice.name === clientName) {
        this.paid.push(invoice);
      } else {
        remainingUnpaidInvoices.push(invoice);
      }
    });

    this.unpaid = remainingUnpaidInvoices;
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

console.log(invoices.totalDue());

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());