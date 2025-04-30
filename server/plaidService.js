// Placeholder: integrate with Plaid API or use sandbox transaction data
module.exports.getBankTransactions = async () => {
  return [
    { date: '2024-04-01', vendor: 'Uber', category: 'Transport', amount: 25.50 },
    { date: '2024-04-02', vendor: 'Whole Foods', category: 'Groceries', amount: 56.00 },
    { date: '2024-04-03', vendor: 'Delta Airlines', category: 'Travel', amount: 350.00 },
  ];
};