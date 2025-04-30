const express = require('express');
const router = express.Router();
const { getTransactions, getSummary } = require('./carbonEstimator');

router.get('/transactions', async (req, res) => {
  const transactions = await getTransactions();
  res.json(transactions);
});

router.get('/summary', async (req, res) => {
  const summary = await getSummary();
  res.json(summary);
});

module.exports = router;