const { getBankTransactions } = require('./plaidService');

// Rough estimates for kg CO2 per dollar spent
const emissionFactors = {
  'Transport': 0.2,
  'Groceries': 0.1,
  'Travel': 0.4
};

exports.getTransactions = async () => {
  const raw = await getBankTransactions();
  return raw.map(tx => ({
    ...tx,
    carbon: (tx.amount * (emissionFactors[tx.category] || 0.15)).toFixed(2)
  }));
};

exports.getSummary = async () => {
  const txs = await exports.getTransactions();
  const summary = {};

  txs.forEach(tx => {
    if (!summary[tx.category]) summary[tx.category] = 0;
    summary[tx.category] += parseFloat(tx.carbon);
  });

  return {
    labels: Object.keys(summary),
    values: Object.values(summary).map(v => parseFloat(v.toFixed(2)))
  };
};