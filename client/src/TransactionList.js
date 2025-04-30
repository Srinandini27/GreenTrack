import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('/api/transactions').then(res => setTransactions(res.data));
  }, []);

  return (
    <div>
      <h3>Recent Transactions</h3>
      <table border="1" cellPadding="6" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th><th>Vendor</th><th>Category</th><th>Amount ($)</th><th>Carbon (kg CO₂)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, i) => (
            <tr key={i}>
              <td>{tx.date}</td>
              <td>{tx.vendor}</td>
              <td>{tx.category}</td>
              <td>{tx.amount}</td>
              <td>{tx.carbon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TransactionList;